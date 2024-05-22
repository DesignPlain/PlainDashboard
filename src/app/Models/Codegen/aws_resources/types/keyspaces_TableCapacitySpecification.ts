import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface keyspaces_TableCapacitySpecification {
  // The throughput capacity specified for read operations defined in read capacity units (RCUs).
  readCapacityUnits?: number;

  // The read/write throughput capacity mode for a table. Valid values: `PAY_PER_REQUEST`, `PROVISIONED`. The default value is `PAY_PER_REQUEST`.
  throughputMode?: string;

  // The throughput capacity specified for write operations defined in write capacity units (WCUs).
  writeCapacityUnits?: number;
}

export function keyspaces_TableCapacitySpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "readCapacityUnits",
      "The throughput capacity specified for read operations defined in read capacity units (RCUs).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "throughputMode",
      "The read/write throughput capacity mode for a table. Valid values: `PAY_PER_REQUEST`, `PROVISIONED`. The default value is `PAY_PER_REQUEST`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "writeCapacityUnits",
      "The throughput capacity specified for write operations defined in write capacity units (WCUs).",
      [],
      false,
      false,
    ),
  ];
}
