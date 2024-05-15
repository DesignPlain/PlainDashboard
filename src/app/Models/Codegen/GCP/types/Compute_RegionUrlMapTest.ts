import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_RegionUrlMapTest {
  // Description of this test case.
  Description?: string;

  // Host portion of the URL.
  Host?: string;

  // Path portion of the URL.
  Path?: string;

  // A reference to expected RegionBackendService resource the given URL should be mapped to.
  Service?: string;
}

export function Compute_RegionUrlMapTest_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Description",
      "Description of this test case.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Host",
      "Host portion of the URL.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Path",
      "Path portion of the URL.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Service",
      "A reference to expected RegionBackendService resource the given URL should be mapped to.",
      [],
      true,
      false,
    ),
  ];
}
