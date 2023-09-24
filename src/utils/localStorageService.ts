class LocalStorageService {
  static getDateOfBirth(): Date | undefined {
    const dobISOString = localStorage.getItem("dob");
    if (dobISOString) {
      return new Date(dobISOString);
    }

    return;
  }

  static saveDateOfBirth(date: Date) {
    localStorage.setItem("dob", date.toISOString());
  }
}

export default LocalStorageService;
