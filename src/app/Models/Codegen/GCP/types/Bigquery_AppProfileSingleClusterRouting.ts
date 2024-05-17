import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Bigquery_AppProfileSingleClusterRouting {
  /*
If true, CheckAndMutateRow and ReadModifyWriteRow requests are allowed by this app profile.
It is unsafe to send these requests to the same table/row/column in multiple clusters.
*/
  AllowTransactionalWrites?: boolean;

  // The cluster to which read/write requests should be routed.
  ClusterId?: string;
}

export function Bigquery_AppProfileSingleClusterRouting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "AllowTransactionalWrites",
      "If true, CheckAndMutateRow and ReadModifyWriteRow requests are allowed by this app profile.\nIt is unsafe to send these requests to the same table/row/column in multiple clusters.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ClusterId",
      "The cluster to which read/write requests should be routed.",
      [],
      true,
      false,
    ),
  ];
}
