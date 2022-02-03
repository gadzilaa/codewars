function twiceAsOld(dadYearsOld, sonYearsOld) {
    let doubleYears = sonYearsOld *2;
    if (doubleYears <= dadYearsOld ) {
      return dadYearsOld - doubleYears;
    } else {
      return doubleYears - dadYearsOld
    }
  }