import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_URLMapTest {
  // Description of this test case.
  Description?: string;

  // Host portion of the URL.
  Host?: string;

  // Path portion of the URL.
  Path?: string;

  // The backend service or backend bucket link that should be matched by this test.
  Service?: string;
}

export function Compute_URLMapTest_GetTypes(): DynamicUIProps[] {
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
      "The backend service or backend bucket link that should be matched by this test.",
      [],
      true,
      false,
    ),
  ];
}
