export const VALIDATION_RULES = {
  isEmail:
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$/,
  isNumber: /^\d+$/,
  isCharacters: /^[a-z A-Z ء-ي]+$/, // event arabic characters allowed
  isNumberDecimal: /^\d+(\.\d{0,2})?$/,
} as const;

export const FORM_VALIDATION = {
  fullName: {
    required: "First and last Name are required",
  },
  email: {
    required: "Email address is required",
    pattern: {
      value: VALIDATION_RULES.isEmail,
      message: "Invalid email address",
    },
  },
  password: {
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters",
    },
    pattern: {
      value: VALIDATION_RULES.password,
      message: "uppercase, lowercase, number and special",
    },
  },
  mobile: {
    required: "Phone number is required",
  },
  country: {
    required: "Country is required",
  },
  otp: {
    pattern: VALIDATION_RULES.isNumber,
  },
  firstName: {
    required: "First Name is required",
    pattern: {
      value: VALIDATION_RULES.isCharacters,
      message: "Should be characters",
    },
  },
  lastName: {
    required: "Last Name is required",
    pattern: {
      value: VALIDATION_RULES.isCharacters,
      message: "Should be characters",
    },
  },
  city: {
    required: "City is required",
    pattern: {
      value: VALIDATION_RULES.isCharacters,
      message: "Should be characters",
    },
  },
  state: {
    pattern: {
      value: VALIDATION_RULES.isCharacters,
      message: "Should be characters",
    },
  },
  zipCode: {
    required: "Zip Code is required",
    pattern: {
      value: VALIDATION_RULES.isNumber,
      message: "Should be numbers",
    },
  },
  amountWithOutDecimal: {
    required: "Amount  is required with out Decimald",
    pattern: {
      value: /^\d+(\.0+)?$/,
      message: "Invalid Amount (without . ceit) ",
    },
  },
  amountWithDecimal: {
    required: "Amount  is required ",
    pattern: {
      value: VALIDATION_RULES.isNumberDecimal,
      message: " Amount should be number (int or decimal) like (xx.yy) ",
    },
  },
} as const;
