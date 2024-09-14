import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appflow_FlowTaskConnectorOperator,
  appflow_FlowTaskConnectorOperator_GetTypes,
} from "./appflow_FlowTaskConnectorOperator";

export interface appflow_FlowTask {
  // Operation to be performed on the provided source fields. See Connector Operator for details.
  connectorOperators?: Array<appflow_FlowTaskConnectorOperator>;

  // Field in a destination connector, or a field value against which Amazon AppFlow validates a source field.
  destinationField?: string;

  // Source fields to which a particular task is applied.
  sourceFields?: Array<string>;

  // Map used to store task-related information. The execution service looks for particular information based on the `TaskType`. Valid keys are `VALUE`, `VALUES`, `DATA_TYPE`, `UPPER_BOUND`, `LOWER_BOUND`, `SOURCE_DATA_TYPE`, `DESTINATION_DATA_TYPE`, `VALIDATION_ACTION`, `MASK_VALUE`, `MASK_LENGTH`, `TRUNCATE_LENGTH`, `MATH_OPERATION_FIELDS_ORDER`, `CONCAT_FORMAT`, `SUBFIELD_CATEGORY_MAP`, and `EXCLUDE_SOURCE_FIELDS_LIST`.
  taskProperties?: Map<string, string>;

  // Particular task implementation that Amazon AppFlow performs. Valid values are `Arithmetic`, `Filter`, `Map`, `Map_all`, `Mask`, `Merge`, `Passthrough`, `Truncate`, and `Validate`.
  taskType?: string;
}

export function appflow_FlowTask_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "connectorOperators",
      "Operation to be performed on the provided source fields. See Connector Operator for details.",
      () => appflow_FlowTaskConnectorOperator_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "destinationField",
      "Field in a destination connector, or a field value against which Amazon AppFlow validates a source field.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "sourceFields",
      "Source fields to which a particular task is applied.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "taskProperties",
      "Map used to store task-related information. The execution service looks for particular information based on the `TaskType`. Valid keys are `VALUE`, `VALUES`, `DATA_TYPE`, `UPPER_BOUND`, `LOWER_BOUND`, `SOURCE_DATA_TYPE`, `DESTINATION_DATA_TYPE`, `VALIDATION_ACTION`, `MASK_VALUE`, `MASK_LENGTH`, `TRUNCATE_LENGTH`, `MATH_OPERATION_FIELDS_ORDER`, `CONCAT_FORMAT`, `SUBFIELD_CATEGORY_MAP`, and `EXCLUDE_SOURCE_FIELDS_LIST`.",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "taskType",
      "Particular task implementation that Amazon AppFlow performs. Valid values are `Arithmetic`, `Filter`, `Map`, `Map_all`, `Mask`, `Merge`, `Passthrough`, `Truncate`, and `Validate`.",
      () => [],
      true,
      false,
    ),
  ];
}
