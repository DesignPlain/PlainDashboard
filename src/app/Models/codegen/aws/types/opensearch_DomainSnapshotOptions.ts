import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface opensearch_DomainSnapshotOptions {
  // Hour during which the service takes an automated daily snapshot of the indices in the domain.
  automatedSnapshotStartHour?: number;
}

export function opensearch_DomainSnapshotOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "automatedSnapshotStartHour",
      "Hour during which the service takes an automated daily snapshot of the indices in the domain.",
      () => [],
      true,
      false,
    ),
  ];
}
