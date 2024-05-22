import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  s3control_MultiRegionAccessPointDetailsRegion,
  s3control_MultiRegionAccessPointDetailsRegion_GetTypes,
} from "./s3control_MultiRegionAccessPointDetailsRegion";
import {
  s3control_MultiRegionAccessPointDetailsPublicAccessBlock,
  s3control_MultiRegionAccessPointDetailsPublicAccessBlock_GetTypes,
} from "./s3control_MultiRegionAccessPointDetailsPublicAccessBlock";

export interface s3control_MultiRegionAccessPointDetails {
  //
  regions?: Array<s3control_MultiRegionAccessPointDetailsRegion>;

  //
  name?: string;

  //
  publicAccessBlock?: s3control_MultiRegionAccessPointDetailsPublicAccessBlock;
}

export function s3control_MultiRegionAccessPointDetails_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "regions",
      "",
      s3control_MultiRegionAccessPointDetailsRegion_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(InputType.String, "name", "", [], true, true),
    new DynamicUIProps(
      InputType.Object,
      "publicAccessBlock",
      "",
      s3control_MultiRegionAccessPointDetailsPublicAccessBlock_GetTypes(),
      false,
      true,
    ),
  ];
}
