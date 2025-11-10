// ⚙️ Auto-generated from en.json
// Do not edit manually

export interface TranslationSchema {
  heading: string;
  toggleTheme: string;
  signIntoAccount: string;
  email: string;
  emailOrUsernameLabel: string;
  usernameOrEmail: string;
  password: string;
  pleaseEnterPassword: string;
  rememberMe: string;
  forgotYourPassword: string;
  resetPassword: string;
  signIn: string;
  notMember: string;
  register: string;
  signInHelp: string;
  invalidMail: string;
  minContainInMail: string;
  maxContentInMail: string;
  passwordRequired: string;
  sendLink: string;
  cancel: string;
  addMore: string;
  deleteAccount: string;
  anleitung: string;
  subtitle: string;
  step1: string;
  step2: string;
  step3: string;
  step4: string;
  thankYou: string;
  sidebar: {
    tileManagement: {
      title: string;
      upload: string;
      listing: string;
    };
    accounts: {
      title: string;
    };
    cityAdmin: {
      title: string;
    };
  };
  createAccount: string;
  tile: {
    upload: {
      heading: string;
      description: string;
      form: {
        uploadLabel: string;
        uploadBtnLabel: string;
        uploadPlaceholder: string;
        errorName: {
          maxFileSize: string;
          supportedExtension: string;
          invalidFile: string;
        };
      };
      previewHeading: string;
      previewDescription: string;
    };
    listingHeading: string;
    listingDescription: string;
    tabs: {
      allTiles: string;
      pendingTiles: string;
      inactiveTiles: string;
      hiddenTiles: string;
    };
    table: {
      head: {
        tile: string;
        status: string;
        description: string;
        actions: string;
      };
      noData: string;
    };
    confirmDelete: {
      heading: string;
      message: string;
      confirmMessage: string;
      cancelMessage: string;
    };
  };
  formMessages: {
    uploadField: {
      label: string;
      btnLabel: string;
      placeholder: string;
      errorName: {
        maxFileSize: string;
        supportedExtension: string;
        invalidFile: string;
        minLength: string;
        maxLength: string;
        titleColor: string;
        tileIcon: string;
        tileDescription: string;
        titleDescriptionColor: string;
        tileImage: string;
      };
    };
  };
  cityAdministration: {
    heading: string;
    description: string;
    createAdmin: string;
    table: {
      head: {
        email: string;
        role: string;
        status: string;
        createdAt: string;
        cities: string;
        actions: string;
        registered: string;
      };
      noData: string;
    };
    confirmDelete: {
      heading: string;
      message: string;
      confirmMessage: string;
      cancelMessage: string;
    };
  };
  accountSetting: {
    heading: string;
    description: string;
    section: {
      personalInfo: {
        heading: string;
        description: string;
      };
      accountInfo: {
        heading: string;
        description: string;
      };
      metadata: {
        heading: string;
        description: string;
      };
      password: {
        heading: string;
        description: string;
      };
    };
    form: {
      maxSocialLinks: string;
      email: {
        label: string;
        placeholder: string;
        error: {
          required: string;
          minContent: string;
          maxContent: string;
        };
      };
      username: {
        label: string;
        placeholder: string;
        error: {
          required: string;
          minContent: string;
          maxContent: string;
        };
      };
      currentPassword: {
        label: string;
        placeholder: string;
        error: {
          required: string;
          minContent: string;
          maxContent: string;
        };
      };
      newPassword: {
        label: string;
        placeholder: string;
        error: {
          required: string;
          minContent: string;
          maxContent: string;
        };
      };
      confirmPassword: {
        label: string;
        placeholder: string;
        error: {
          required: string;
          minContent: string;
          maxContent: string;
          passwordMismatch: string;
        };
      };
      yourName: {
        label: string;
        placeholder: string;
        error: {
          required: string;
          minContent: string;
          maxContent: string;
        };
      };
      phoneNumber: {
        label: string;
        placeholder: string;
        error: {
          required: string;
          minContent: string;
          maxContent: string;
        };
      };
      description: {
        label: string;
        placeholder: string;
        error: {
          required: string;
          minContent: string;
          maxContent: string;
        };
      };
      website: {
        label: string;
        placeholder: string;
        error: {
          required: string;
          minContent: string;
          maxContent: string;
          duplicateWebsite: string;
        };
      };
      websiteLink: {
        label: string;
        placeholder: string;
        error: {
          required: string;
          minContent: string;
          maxContent: string;
          invalidLink: string;
          duplicateLink: string;
        };
      };
    };
  };
  registration: {
    general: {
      alreadyHaveAccount: string;
      login: string;
      acceptPolicy: string;
      privacy: string;
      and: string;
      terms: string;
      mustAcceptTermsAndPrivacy: string;
    };
    form: {
      email: {
        error: {
          invalidMail: string;
        };
      };
      username: {
        label: string;
        placeholder: string;
        error: {
          minContent: string;
          maxContent: string;
          noSpaces: string;
        };
      };
      firstName: {
        label: string;
        placeholder: string;
        error: {
          minContent: string;
          maxContent: string;
          noSpaces: string;
          invalidChars: string;
        };
      };
      lastName: {
        label: string;
        placeholder: string;
        error: {
          minContent: string;
          maxContent: string;
          noSpaces: string;
          invalidChars: string;
        };
      };
      password: {
        label: string;
        placeholder: string;
        error: {
          minContent: string;
          maxContent: string;
          noSpaces: string;
        };
      };
      confirmPassword: {
        label: string;
        placeholder: string;
        error: {
          required: string;
          mismatch: string;
        };
      };
    };
  };
}

export type TranslationKey = 'heading' | 'toggleTheme' | 'signIntoAccount' | 'email' | 'emailOrUsernameLabel' | 'usernameOrEmail' | 'password' | 'pleaseEnterPassword' | 'rememberMe' | 'forgotYourPassword' | 'resetPassword' | 'signIn' | 'notMember' | 'register' | 'signInHelp' | 'invalidMail' | 'minContainInMail' | 'maxContentInMail' | 'passwordRequired' | 'sendLink' | 'cancel' | 'addMore' | 'deleteAccount' | 'anleitung' | 'subtitle' | 'step1' | 'step2' | 'step3' | 'step4' | 'thankYou' | 'sidebar.tileManagement.title' | 'sidebar.tileManagement.upload' | 'sidebar.tileManagement.listing' | 'sidebar.accounts.title' | 'sidebar.cityAdmin.title' | 'createAccount' | 'tile.upload.heading' | 'tile.upload.description' | 'tile.upload.form.uploadLabel' | 'tile.upload.form.uploadBtnLabel' | 'tile.upload.form.uploadPlaceholder' | 'tile.upload.form.errorName.maxFileSize' | 'tile.upload.form.errorName.supportedExtension' | 'tile.upload.form.errorName.invalidFile' | 'tile.upload.previewHeading' | 'tile.upload.previewDescription' | 'tile.listingHeading' | 'tile.listingDescription' | 'tile.tabs.allTiles' | 'tile.tabs.pendingTiles' | 'tile.tabs.inactiveTiles' | 'tile.tabs.hiddenTiles' | 'tile.table.head.tile' | 'tile.table.head.status' | 'tile.table.head.description' | 'tile.table.head.actions' | 'tile.table.noData' | 'tile.confirmDelete.heading' | 'tile.confirmDelete.message' | 'tile.confirmDelete.confirmMessage' | 'tile.confirmDelete.cancelMessage' | 'formMessages.uploadField.label' | 'formMessages.uploadField.btnLabel' | 'formMessages.uploadField.placeholder' | 'formMessages.uploadField.errorName.maxFileSize' | 'formMessages.uploadField.errorName.supportedExtension' | 'formMessages.uploadField.errorName.invalidFile' | 'formMessages.uploadField.errorName.minLength' | 'formMessages.uploadField.errorName.maxLength' | 'formMessages.uploadField.errorName.titleColor' | 'formMessages.uploadField.errorName.tileIcon' | 'formMessages.uploadField.errorName.tileDescription' | 'formMessages.uploadField.errorName.titleDescriptionColor' | 'formMessages.uploadField.errorName.tileImage' | 'cityAdministration.heading' | 'cityAdministration.description' | 'cityAdministration.createAdmin' | 'cityAdministration.table.head.email' | 'cityAdministration.table.head.role' | 'cityAdministration.table.head.status' | 'cityAdministration.table.head.createdAt' | 'cityAdministration.table.head.cities' | 'cityAdministration.table.head.actions' | 'cityAdministration.table.head.registered' | 'cityAdministration.table.noData' | 'cityAdministration.confirmDelete.heading' | 'cityAdministration.confirmDelete.message' | 'cityAdministration.confirmDelete.confirmMessage' | 'cityAdministration.confirmDelete.cancelMessage' | 'accountSetting.heading' | 'accountSetting.description' | 'accountSetting.section.personalInfo.heading' | 'accountSetting.section.personalInfo.description' | 'accountSetting.section.accountInfo.heading' | 'accountSetting.section.accountInfo.description' | 'accountSetting.section.metadata.heading' | 'accountSetting.section.metadata.description' | 'accountSetting.section.password.heading' | 'accountSetting.section.password.description' | 'accountSetting.form.maxSocialLinks' | 'accountSetting.form.email.label' | 'accountSetting.form.email.placeholder' | 'accountSetting.form.email.error.required' | 'accountSetting.form.email.error.minContent' | 'accountSetting.form.email.error.maxContent' | 'accountSetting.form.username.label' | 'accountSetting.form.username.placeholder' | 'accountSetting.form.username.error.required' | 'accountSetting.form.username.error.minContent' | 'accountSetting.form.username.error.maxContent' | 'accountSetting.form.currentPassword.label' | 'accountSetting.form.currentPassword.placeholder' | 'accountSetting.form.currentPassword.error.required' | 'accountSetting.form.currentPassword.error.minContent' | 'accountSetting.form.currentPassword.error.maxContent' | 'accountSetting.form.newPassword.label' | 'accountSetting.form.newPassword.placeholder' | 'accountSetting.form.newPassword.error.required' | 'accountSetting.form.newPassword.error.minContent' | 'accountSetting.form.newPassword.error.maxContent' | 'accountSetting.form.confirmPassword.label' | 'accountSetting.form.confirmPassword.placeholder' | 'accountSetting.form.confirmPassword.error.required' | 'accountSetting.form.confirmPassword.error.minContent' | 'accountSetting.form.confirmPassword.error.maxContent' | 'accountSetting.form.confirmPassword.error.passwordMismatch' | 'accountSetting.form.yourName.label' | 'accountSetting.form.yourName.placeholder' | 'accountSetting.form.yourName.error.required' | 'accountSetting.form.yourName.error.minContent' | 'accountSetting.form.yourName.error.maxContent' | 'accountSetting.form.phoneNumber.label' | 'accountSetting.form.phoneNumber.placeholder' | 'accountSetting.form.phoneNumber.error.required' | 'accountSetting.form.phoneNumber.error.minContent' | 'accountSetting.form.phoneNumber.error.maxContent' | 'accountSetting.form.description.label' | 'accountSetting.form.description.placeholder' | 'accountSetting.form.description.error.required' | 'accountSetting.form.description.error.minContent' | 'accountSetting.form.description.error.maxContent' | 'accountSetting.form.website.label' | 'accountSetting.form.website.placeholder' | 'accountSetting.form.website.error.required' | 'accountSetting.form.website.error.minContent' | 'accountSetting.form.website.error.maxContent' | 'accountSetting.form.website.error.duplicateWebsite' | 'accountSetting.form.websiteLink.label' | 'accountSetting.form.websiteLink.placeholder' | 'accountSetting.form.websiteLink.error.required' | 'accountSetting.form.websiteLink.error.minContent' | 'accountSetting.form.websiteLink.error.maxContent' | 'accountSetting.form.websiteLink.error.invalidLink' | 'accountSetting.form.websiteLink.error.duplicateLink' | 'registration.general.alreadyHaveAccount' | 'registration.general.login' | 'registration.general.acceptPolicy' | 'registration.general.privacy' | 'registration.general.and' | 'registration.general.terms' | 'registration.general.mustAcceptTermsAndPrivacy' | 'registration.form.email.error.invalidMail' | 'registration.form.username.label' | 'registration.form.username.placeholder' | 'registration.form.username.error.minContent' | 'registration.form.username.error.maxContent' | 'registration.form.username.error.noSpaces' | 'registration.form.firstName.label' | 'registration.form.firstName.placeholder' | 'registration.form.firstName.error.minContent' | 'registration.form.firstName.error.maxContent' | 'registration.form.firstName.error.noSpaces' | 'registration.form.firstName.error.invalidChars' | 'registration.form.lastName.label' | 'registration.form.lastName.placeholder' | 'registration.form.lastName.error.minContent' | 'registration.form.lastName.error.maxContent' | 'registration.form.lastName.error.noSpaces' | 'registration.form.lastName.error.invalidChars' | 'registration.form.password.label' | 'registration.form.password.placeholder' | 'registration.form.password.error.minContent' | 'registration.form.password.error.maxContent' | 'registration.form.password.error.noSpaces' | 'registration.form.confirmPassword.label' | 'registration.form.confirmPassword.placeholder' | 'registration.form.confirmPassword.error.required' | 'registration.form.confirmPassword.error.mismatch';
