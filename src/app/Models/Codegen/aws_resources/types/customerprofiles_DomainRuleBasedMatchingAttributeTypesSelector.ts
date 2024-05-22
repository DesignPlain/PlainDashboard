import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface customerprofiles_DomainRuleBasedMatchingAttributeTypesSelector {
  // The `Address` type. You can choose from `Address`, `BusinessAddress`, `MaillingAddress`, and `ShippingAddress`.
  addresses?: Array<string>;

  // Configures the `AttributeMatchingModel`, you can either choose `ONE_TO_ONE` or `MANY_TO_MANY`.
  attributeMatchingModel?: string;

  // The `Email` type. You can choose from `EmailAddress`, `BusinessEmailAddress` and `PersonalEmailAddress`.
  emailAddresses?: Array<string>;

  // The `PhoneNumber` type. You can choose from `PhoneNumber`, `HomePhoneNumber`, and `MobilePhoneNumber`.
  phoneNumbers?: Array<string>;
}

export function customerprofiles_DomainRuleBasedMatchingAttributeTypesSelector_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "addresses",
      "The `Address` type. You can choose from `Address`, `BusinessAddress`, `MaillingAddress`, and `ShippingAddress`.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "attributeMatchingModel",
      "Configures the `AttributeMatchingModel`, you can either choose `ONE_TO_ONE` or `MANY_TO_MANY`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "emailAddresses",
      "The `Email` type. You can choose from `EmailAddress`, `BusinessEmailAddress` and `PersonalEmailAddress`.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "phoneNumbers",
      "The `PhoneNumber` type. You can choose from `PhoneNumber`, `HomePhoneNumber`, and `MobilePhoneNumber`.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
