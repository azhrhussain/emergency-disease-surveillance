// import { QUESTIONS, QUESTIONS_CATEGORY1,QUESTIONS_CATEGORY2 } from './constants';

import { QUESTIONS } from './constants';

// export const questionsPayload = () => {
//   const payload = QUESTIONS.map((obj: any) => {
//     const payload = {
//       ...obj,
//       case: QUESTIONS_CATEGORY1,
//       death: QUESTIONS_CATEGORY2,
//     };
//     return payload;
//   });

//   return payload;
// };

export const sumOfQuestion = (
  currentObj: Array<Object>,
  type: string,
  campare: string,
  gender: string
): number => {
  return currentObj.reduce<number>((accumulator: number, obj: any) => {
    return Number(accumulator) + Number(obj[type][campare][gender] || 0);
  }, 0);
};

const sumQuestionObjectsByKey = (...objs: any[]) => {
  return Object.values(
    objs.reduce((a: any, e: any) => {
      a[e.qId] = a[e.qId] || {
        qId: e.qId,
        q: e.q,
        case: {
          greaterThen5: { male: 0, female: 0 },
          lessThen5: { male: 0, female: 0 },
        },
        death: {
          greaterThen5: { male: 0, female: 0 },
          lessThen5: { male: 0, female: 0 },
        },
      };

      for (const k in e) {
        for (let gt in e[k]) {
          for (let mf in e[k][gt]) {
            if (k !== 'qId' && k !== 'q') {
              a[e.qId][k][gt][mf] = a[e.qId][k]
                ? Number(a[e.qId][k][gt][mf]) + Number(e[k][gt][mf])
                : e[k][gt][mf];
            }
          }
        }
      }
      return a;
    }, {})
  );
};

const sumrRapidAntigenTestObjectsByKey = (...rapidAntigenTest: any[]) => {
  return Object.values(
    rapidAntigenTest.reduce((a, e) => {
      a[e.id] = a[e.id] || {
        id: e.id,
        testName: e.testName,
      };

      for (const k in e) {
        if (k !== 'id' && k !== 'testName') {
          a[e.id][k] = a[e.id][k]
            ? Number(a[e.id][k]) + Number(e[k])
            : Number(e[k]);
        }
      }
      return a;
    }, {})
  );
};
const sumHypothisisObjectsByKey = (...hypothisisData: any[]) => {
  return Object.values(
    hypothisisData.reduce((a, e) => {
      a[e.id] = a[e.id] || {
        reportingDate: e.reportingDate,
        province: e.province,
        submittedBy: e.submittedBy,
      };

      for (const k in e) {
        if (k !== 'reportingDate' && k !== 'province' && k !== 'submittedBy') {
          if (k === 'catchmentPopulation') {
            a[e.id][k] = a[e.id][k]
              ? Number(a[e.id][k]) + Number(e[k])
              : Number(e[k]);
          } else {
            a[e.id][k] = a[e.id][k] ? `${a[e.id][k]} , ${e[k]}` : e[k];
          }
        }
      }
      return a;
    }, {})
  );
};

const normalizeSumObjectsByKey = (objs: any) => {
  let hypothisisData: any = [];
  let rapidAntigenTestData: any = [];
  let questionData: any = [];
  let mataSumData: any = [];

  for (const key in objs) {
    // ie
    // ...objs['DrNouman']?.data.queestionsData,
    // ...objs['DrMuneeb']?.data.queestionsData,
    // ...objs['DrAliRahman']?.data.queestionsData,
    // ...objs['DrSaidAlamKhan']?.data.queestionsData
    // qdata = sumQuestionObjectsByKey(...objs[key].data.queestionsData);
    hypothisisData.push(objs[key].data.hypothisis);
    questionData.push(...objs[key].data.queestionsData);
    rapidAntigenTestData.push(...objs[key].data.rapidAntigenTest);
    mataSumData.push({
      reportedBy: objs[key].reportedBy,
      reportingDate: objs[key].reportingDate,
    });
  }

  const removeDuplicates = (data: any) => {
    const payload = data[0];
    let payloadObj = {...payload}
    for (let key in payload) {
      if (
        key !== 'reportingDate' &&
        key !== 'province' &&
        key !== 'submittedBy' &&
        key !== 'catchmentPopulation'
      ) {
        const arr = payload[key].split(',');
        const finalVal = Array.from(new Set(arr.map((i: string) => i.trim()))).toLocaleString();
        payloadObj[key]=finalVal;
      }
    }
    return payloadObj;
  };
  const hypothisisNormalize = removeDuplicates(sumHypothisisObjectsByKey(...hypothisisData));
  //normalize data retrun
  return {
    mataSumData,
    hypothisisData: hypothisisNormalize,
    questionsData: sumQuestionObjectsByKey(...questionData),
    rapidAntigenTestData: sumrRapidAntigenTestObjectsByKey(
      ...rapidAntigenTestData
    ),
  };
};
export const getSumAndMergeData = (objOfData: any) => {
  let normalizePayload: any;
  console.log('data come:', objOfData);

  normalizePayload = normalizeSumObjectsByKey(objOfData);
  console.log('rentur normlizeP:', normalizePayload);
  return normalizePayload;
};

// sum of total question types in questionnaire
export const getTotalSum = (dataObject: any) => {
  return {
    qTotal: 20,
    case: {
      lessThen5: {
        male: sumOfQuestion(dataObject, 'case', 'lessThen5', 'male') || '0',
        female: sumOfQuestion(dataObject, 'case', 'lessThen5', 'female'),
      },
      greaterThen5: {
        male: sumOfQuestion(dataObject, 'case', 'greaterThen5', 'male'),
        female: sumOfQuestion(dataObject, 'case', 'greaterThen5', 'female'),
      },
    },
    death: {
      lessThen5: {
        male: sumOfQuestion(dataObject, 'death', 'lessThen5', 'male'),
        female: sumOfQuestion(dataObject, 'death', 'lessThen5', 'female'),
      },
      greaterThen5: {
        male: sumOfQuestion(dataObject, 'death', 'greaterThen5', 'male') ,
        female: sumOfQuestion(dataObject, 'death', 'greaterThen5', 'female'),
      },
    },
  };
};
