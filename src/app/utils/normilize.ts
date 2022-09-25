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
    return Number(accumulator) + Number(obj[type][campare][gender]);
  }, 0);
};

export const objectOfData = {
  DrNouman: {
    data: {
      hypothisis: {
        catchmentPopulation: '10',
        districts: 'lahore dist',
        healthFacilityCamp: 'Musa zai camp',
        healthFacilityCode: '20221 code',
        healthFacilityName: 'Killa abdulih Name',
        healthFacilityType: 'Killa abdulih Type',
        organizationName: 'WHO',
        phoneNumber: '03458033800',
        province: 'Khyber Pakhtunkhwa',
        reportingDate: '2022/09/25',
        submittedBy: 'DrNouman',
        tehsil: 'liaquatpur teh',
        uc: '86,56,566c uc',
      },
      queestionsData: [
        {
          case: {
            greaterThen5: {
              female: 4,
              male: 3,
            },
            lessThen5: {
              female: 2,
              male: 1,
            },
          },
          death: {
            greaterThen5: {
              female: 8,
              male: 7,
            },
            lessThen5: {
              female: 6,
              male: 5,
            },
          },
          q: 'Acute watery diarrhea (AWD) /Suspected Cholera',
          qId: 1,
        },
        {
          case: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          death: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          q: 'Bloody Diarrhea/ Another acute diarrhea',
          qId: 2,
        },
        {
          case: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          death: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          q: 'Acute Upper Respiratory Tract Infection',
          qId: 3,
        },
        {
          case: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          death: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          q: 'Suspected Dengue Fever',
          qId: 4,
        },
        {
          case: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          death: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          q: 'Pneumonia',
          qId: 5,
        },
        {
          case: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          death: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          q: 'Suspected COVID-19',
          qId: 6,
        },
        {
          case: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          death: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          q: 'Suspected Dengue Fever',
          qId: 7,
        },
        {
          case: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          death: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          q: 'Suspected Malaria',
          qId: 8,
        },
        {
          case: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          death: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          q: 'Suspected Chickenpox',
          qId: 9,
        },
        {
          case: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          death: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          q: 'Suspected Typhoid Fever',
          qId: 10,
        },
        {
          case: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          death: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          q: 'Neonatal tetanus/Neonatal sepsis',
          qId: 11,
        },
        {
          case: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          death: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          q: 'Acute Jaundice Syndrome (Hepatitis-A and E)',
          qId: 12,
        },
        {
          case: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          death: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          q: 'Suspected Hemorrhagic Fever/CCHF',
          qId: 14,
        },
        {
          case: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          death: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          q: 'Unexplained Fever > 38.5˚C (PUO)',
          qId: 15,
        },
        {
          case: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          death: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          q: 'Skin Disease/Scabies',
          qId: 16,
        },
        {
          case: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          death: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          q: 'Cutaneous Leishmaniasis',
          qId: 17,
        },
        {
          case: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          death: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          q: 'Acute Malnutrition',
          qId: 18,
        },
        {
          case: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          death: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          q: 'Eye Infection',
          qId: 19,
        },
        {
          case: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          death: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          q: 'Impetigo',
          qId: 20,
        },
        {
          case: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          death: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          q: 'Dog Bite/Snake Bite',
          qId: 21,
        },
        {
          case: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          death: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          q: 'Others',
          qId: 22,
        },
      ],
      rapidAntigenTest: [
        {
          id: 1,
          positive: 1,
          testName: 'Malaria',
          tests: 1,
        },
        {
          id: 2,
          positive: 1,
          testName: 'Dengue',
          tests: 2,
        },
        {
          id: 3,
          positive: 1,
          testName: 'Hepatitis A',
          tests: 3,
        },
        {
          id: 4,
          positive: 1,
          testName: 'Hepatitis E',
          tests: 4,
        },
        {
          id: 5,
          positive: 1,
          testName: 'Cholera',
          tests: 5,
        },
      ],
    },
    reportedBy: 'DrNouman',
    reportingDate: '2022/09/25',
  },
  DrShahid: {
    data: {
      hypothisis: {
        catchmentPopulation: '10',
        districts: 'lahore dist',
        healthFacilityCamp: 'Musa zai camp',
        healthFacilityCode: '20221 code',
        healthFacilityName: 'Killa abdulih Name',
        healthFacilityType: 'Killa abdulih Type',
        organizationName: 'WHO',
        phoneNumber: '03458033800',
        province: 'Khyber Pakhtunkhwa',
        reportingDate: '2022/09/25',
        submittedBy: 'DrShahid',
        tehsil: 'liaquatpur teh',
        uc: '86,56,566c uc',
      },
      queestionsData: [
        {
          case: {
            greaterThen5: {
              female: 4,
              male: 3,
            },
            lessThen5: {
              female: 2,
              male: 1,
            },
          },
          death: {
            greaterThen5: {
              female: 8,
              male: 7,
            },
            lessThen5: {
              female: 6,
              male: 5,
            },
          },
          q: 'Acute watery diarrhea (AWD) /Suspected Cholera',
          qId: 1,
        },
        {
          case: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          death: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          q: 'Bloody Diarrhea/ Another acute diarrhea',
          qId: 2,
        },
        {
          case: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          death: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          q: 'Acute Upper Respiratory Tract Infection',
          qId: 3,
        },
        {
          case: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          death: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          q: 'Suspected Dengue Fever',
          qId: 4,
        },
        {
          case: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          death: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          q: 'Pneumonia',
          qId: 5,
        },
        {
          case: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          death: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          q: 'Suspected COVID-19',
          qId: 6,
        },
        {
          case: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          death: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          q: 'Suspected Dengue Fever',
          qId: 7,
        },
        {
          case: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          death: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          q: 'Suspected Malaria',
          qId: 8,
        },
        {
          case: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          death: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          q: 'Suspected Chickenpox',
          qId: 9,
        },
        {
          case: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          death: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          q: 'Suspected Typhoid Fever',
          qId: 10,
        },
        {
          case: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          death: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          q: 'Neonatal tetanus/Neonatal sepsis',
          qId: 11,
        },
        {
          case: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          death: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          q: 'Acute Jaundice Syndrome (Hepatitis-A and E)',
          qId: 12,
        },
        {
          case: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          death: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          q: 'Suspected Hemorrhagic Fever/CCHF',
          qId: 14,
        },
        {
          case: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          death: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          q: 'Unexplained Fever > 38.5˚C (PUO)',
          qId: 15,
        },
        {
          case: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          death: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          q: 'Skin Disease/Scabies',
          qId: 16,
        },
        {
          case: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          death: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          q: 'Cutaneous Leishmaniasis',
          qId: 17,
        },
        {
          case: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          death: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          q: 'Acute Malnutrition',
          qId: 18,
        },
        {
          case: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          death: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          q: 'Eye Infection',
          qId: 19,
        },
        {
          case: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          death: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          q: 'Impetigo',
          qId: 20,
        },
        {
          case: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          death: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          q: 'Dog Bite/Snake Bite',
          qId: 21,
        },
        {
          case: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          death: {
            greaterThen5: {
              female: 0,
              male: 0,
            },
            lessThen5: {
              female: 0,
              male: 0,
            },
          },
          q: 'Others',
          qId: 22,
        },
      ],
      rapidAntigenTest: [
        {
          id: 1,
          positive: 1,
          testName: 'Malaria',
          tests: 1,
        },
        {
          id: 2,
          positive: 1,
          testName: 'Dengue',
          tests: 2,
        },
        {
          id: 3,
          positive: 1,
          testName: 'Hepatitis A',
          tests: 3,
        },
        {
          id: 4,
          positive: 1,
          testName: 'Hepatitis E',
          tests: 4,
        },
        {
          id: 5,
          positive: 1,
          testName: 'Cholera',
          tests: 5,
        },
      ],
    },
    reportedBy: 'DrShahid',
    reportingDate: '2022/09/25',
  },
};

export const getSumAndMergeData = (objOfData: any) => {
  const sumObjectsByKey = (...objs: any[]) =>
    Object.values(
      objs.reduce((a, e) => {
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
  const questionnaireObj = sumObjectsByKey(
    ...objOfData['DrShahid007'].data.queestionsData,
    ...objOfData['DrNouman'].data.queestionsData,
    ...objOfData['DrMuneeb'].data.queestionsData,
    ...objOfData['DrAliRahman'].data.queestionsData,
    ...objOfData['DrSaidAlamKhan'].data.queestionsData
  );
  return questionnaireObj;
};

export const getTotalSum = (dataObject: any) => {
  return {
    qTotal: 22,
    case: {
      lessThen5: {
        male: sumOfQuestion(dataObject, 'case', 'lessThen5', 'male'),
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
        male: sumOfQuestion(dataObject, 'death', 'greaterThen5', 'male'),
        female: sumOfQuestion(dataObject, 'death', 'greaterThen5', 'female'),
      },
    },
  };
};
