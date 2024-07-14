import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface s3_BucketWebsiteConfigurationV2IndexDocument {
  /*
Suffix that is appended to a request that is for a directory on the website endpoint.
For example, if the suffix is `index.html` and you make a request to `samplebucket/images/`, the data that is returned will be for the object with the key name `images/index.html`.
The suffix must not be empty and must not include a slash character.
*/
  suffix?: string;
}

export function s3_BucketWebsiteConfigurationV2IndexDocument_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "suffix",
      "Suffix that is appended to a request that is for a directory on the website endpoint.\nFor example, if the suffix is `index.html` and you make a request to `samplebucket/images/`, the data that is returned will be for the object with the key name `images/index.html`.\nThe suffix must not be empty and must not include a slash character.",
      [],
      true,
      false,
    ),
  ];
}
