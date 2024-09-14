import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface codepipeline_CustomActionTypeConfigurationProperty {
  // The description of the action configuration property.
  description?: string;

  // Whether the configuration property is a key.
  key?: boolean;

  // The name of the action configuration property.
  name?: string;

  // Indicates that the property will be used in conjunction with PollForJobs.
  queryable?: boolean;

  // Whether the configuration property is a required value.
  required?: boolean;

  // Whether the configuration property is secret.
  secret?: boolean;

  // The type of the configuration property. Valid values: `String`, `Number`, `Boolean`
  type?: string;
}

export function codepipeline_CustomActionTypeConfigurationProperty_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the action configuration property.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "queryable",
      "Indicates that the property will be used in conjunction with PollForJobs.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "required",
      "Whether the configuration property is a required value.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "secret",
      "Whether the configuration property is secret.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of the configuration property. Valid values: `String`, `Number`, `Boolean`",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "The description of the action configuration property.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "key",
      "Whether the configuration property is a key.",
      () => [],
      true,
      false,
    ),
  ];
}
