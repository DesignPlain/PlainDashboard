import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface s3control_MultiRegionAccessPointDetailsPublicAccessBlock {
  //
  blockPublicAcls?: boolean;

  //
  blockPublicPolicy?: boolean;

  //
  ignorePublicAcls?: boolean;

  //
  restrictPublicBuckets?: boolean;
}

export function s3control_MultiRegionAccessPointDetailsPublicAccessBlock_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, "blockPublicAcls", "", [], false, true),
    new DynamicUIProps(
      InputType.Bool,
      "blockPublicPolicy",
      "",
      [],
      false,
      true,
    ),
    new DynamicUIProps(InputType.Bool, "ignorePublicAcls", "", [], false, true),
    new DynamicUIProps(
      InputType.Bool,
      "restrictPublicBuckets",
      "",
      [],
      false,
      true,
    ),
  ];
}
