export default {
  projections: {
    ДомПоставщикE: {
      дом: {
        __caption__: 'Дом',
        address: {
          __caption__: 'Address'
        }
      },
      поставщик: {
        __caption__: 'Поставщик',
        иНН: {
          __caption__: 'ИНН'
        }
      }
    },
    ДомПоставщикL: {
      дом: {
        __caption__: 'Address',
        address: {
          __caption__: 'Address'
        }
      },
      поставщик: {
        __caption__: 'ИНН',
        иНН: {
          __caption__: 'ИНН'
        }
      }
    }
  },
  validations: {
    дом: {
      __caption__: 'Дом'
    },
    поставщик: {
      __caption__: 'Поставщик'
    }
  }
};
