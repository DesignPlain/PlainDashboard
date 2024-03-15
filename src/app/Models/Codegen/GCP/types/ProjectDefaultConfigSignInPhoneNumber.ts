export interface ProjectDefaultConfigSignInPhoneNumber {
  // A map of <test phone number, fake code> that can be used for phone auth testing.
  TestPhoneNumbers?: Map<string, string>;

  // Whether phone number auth is enabled for the project or not.
  Enabled?: boolean;
}
