import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface imagebuilder_getImageOutputResourceAmi {
  // Region of the container image.
  region?: string;

  // Account identifier of the AMI.
  accountId?: string;

  // Description of the AMI.
  description?: string;

  // Identifier of the AMI.
  image?: string;

  // Name of the AMI.
  name?: string;
}

export function imagebuilder_getImageOutputResourceAmi_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "region",
      "Region of the container image.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "accountId",
      "Account identifier of the AMI.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "Description of the AMI.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "image",
      "Identifier of the AMI.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the AMI.",
      [],
      true,
      false,
    ),
  ];
}
