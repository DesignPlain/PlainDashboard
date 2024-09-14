import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  alloydb_getSupportedDatabaseFlagsSupportedDatabaseFlagIntegerRestrictions,
  alloydb_getSupportedDatabaseFlagsSupportedDatabaseFlagIntegerRestrictions_GetTypes,
} from "./alloydb_getSupportedDatabaseFlagsSupportedDatabaseFlagIntegerRestrictions";
import {
  alloydb_getSupportedDatabaseFlagsSupportedDatabaseFlagStringRestrictions,
  alloydb_getSupportedDatabaseFlagsSupportedDatabaseFlagStringRestrictions_GetTypes,
} from "./alloydb_getSupportedDatabaseFlagsSupportedDatabaseFlagStringRestrictions";

export interface alloydb_getSupportedDatabaseFlagsSupportedDatabaseFlag {
  // Major database engine versions for which this flag is supported. The supported values are `POSTGRES_14` and `DATABASE_VERSION_UNSPECIFIED`.
  supportedDbVersions?: Array<string>;

  // ValueType describes the semantic type of the value that the flag accepts. Regardless of the ValueType, the Instance.database_flags field accepts the stringified version of the value, i.e. "20" or "3.14". The supported values are `VALUE_TYPE_UNSPECIFIED`, `STRING`, `INTEGER`, `FLOAT` and `NONE`.
  valueType?: string;

  // Whether the database flag accepts multiple values. If true, a comma-separated list of stringified values may be specified.
  acceptsMultipleValues?: boolean;

  // The name of the database flag, e.g. "max_allowed_packets". The is a possibly key for the Instance.database_flags map field.
  flagName?: string;

  // Restriction on `INTEGER` type value. Specifies the minimum value and the maximum value that can be specified, if applicable.
  integerRestrictions?: alloydb_getSupportedDatabaseFlagsSupportedDatabaseFlagIntegerRestrictions;

  // The name of the flag resource, following Google Cloud conventions, e.g.: - projects/{project}/locations/{location}/flags/{flag} This field currently has no semantic meaning.
  name?: string;

  // Whether setting or updating this flag on an Instance requires a database restart. If a flag that requires database restart is set, the backend will automatically restart the database (making sure to satisfy any availability SLO's).
  requiresDbRestart?: boolean;

  // Restriction on `STRING` type value. The list of allowed values, if bounded. This field will be empty if there is a unbounded number of allowed values.
  stringRestrictions?: alloydb_getSupportedDatabaseFlagsSupportedDatabaseFlagStringRestrictions;
}

export function alloydb_getSupportedDatabaseFlagsSupportedDatabaseFlag_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "stringRestrictions",
      "Restriction on `STRING` type value. The list of allowed values, if bounded. This field will be empty if there is a unbounded number of allowed values.",
      () =>
        alloydb_getSupportedDatabaseFlagsSupportedDatabaseFlagStringRestrictions_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "supportedDbVersions",
      "Major database engine versions for which this flag is supported. The supported values are `POSTGRES_14` and `DATABASE_VERSION_UNSPECIFIED`.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "valueType",
      'ValueType describes the semantic type of the value that the flag accepts. Regardless of the ValueType, the Instance.database_flags field accepts the stringified version of the value, i.e. "20" or "3.14". The supported values are `VALUE_TYPE_UNSPECIFIED`, `STRING`, `INTEGER`, `FLOAT` and `NONE`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "acceptsMultipleValues",
      "Whether the database flag accepts multiple values. If true, a comma-separated list of stringified values may be specified.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "flagName",
      'The name of the database flag, e.g. "max_allowed_packets". The is a possibly key for the Instance.database_flags map field.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "integerRestrictions",
      "Restriction on `INTEGER` type value. Specifies the minimum value and the maximum value that can be specified, if applicable.",
      () =>
        alloydb_getSupportedDatabaseFlagsSupportedDatabaseFlagIntegerRestrictions_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the flag resource, following Google Cloud conventions, e.g.: * projects/{project}/locations/{location}/flags/{flag} This field currently has no semantic meaning.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "requiresDbRestart",
      "Whether setting or updating this flag on an Instance requires a database restart. If a flag that requires database restart is set, the backend will automatically restart the database (making sure to satisfy any availability SLO's).",
      () => [],
      true,
      false,
    ),
  ];
}
