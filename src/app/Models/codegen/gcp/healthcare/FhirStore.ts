import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  healthcare_FhirStoreStreamConfig,
  healthcare_FhirStoreStreamConfig_GetTypes,
} from "../types/healthcare_FhirStoreStreamConfig";
import {
  healthcare_FhirStoreNotificationConfig,
  healthcare_FhirStoreNotificationConfig_GetTypes,
} from "../types/healthcare_FhirStoreNotificationConfig";

export interface FhirStoreArgs {
  /*
Enable parsing of references within complex FHIR data types such as Extensions. If this value is set to ENABLED, then features like referential integrity and Bundle reference rewriting apply to all references. If this flag has not been specified the behavior of the FHIR store will not change, references in complex data types will not be parsed. New stores will have this value set to ENABLED by default after a notification period. Warning: turning on this flag causes processing existing resources to fail if they contain references to non-existent resources.
Possible values are: `COMPLEX_DATA_TYPE_REFERENCE_PARSING_UNSPECIFIED`, `DISABLED`, `ENABLED`.
*/
  complexDataTypeReferenceParsing?: string;

  /*
If true, overrides the default search behavior for this FHIR store to handling=strict which returns an error for unrecognized search parameters.
If false, uses the FHIR specification default handling=lenient which ignores unrecognized search parameters.
The handling can always be changed from the default on an individual API call by setting the HTTP header Prefer: handling=strict or Prefer: handling=lenient.
*/
  defaultSearchHandlingStrict?: boolean;

  /*
Whether to disable referential integrity in this FHIR store. This field is immutable after FHIR store
creation. The default value is false, meaning that the API will enforce referential integrity and fail the
requests that will result in inconsistent state in the FHIR store. When this field is set to true, the API
will skip referential integrity check. Consequently, operations that rely on references, such as
Patient.get$everything, will not return all the results if broken references exist.
-- Changing this property may recreate the FHIR store (removing all data) --
*/
  disableReferentialIntegrity?: boolean;

  /*
Whether this FHIR store has the updateCreate capability. This determines if the client can use an Update
operation to create a new resource with a client-specified ID. If false, all IDs are server-assigned through
the Create operation and attempts to Update a non-existent resource will return errors. Please treat the audit
logs with appropriate levels of care if client-specified resource IDs contain sensitive data such as patient
identifiers, those IDs will be part of the FHIR resource path recorded in Cloud audit logs and Cloud Pub/Sub
notifications.
*/
  enableUpdateCreate?: boolean;

  /*
User-supplied key-value pairs used to organize FHIR stores.
Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must
conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}
Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}
No more than 64 labels can be associated with a given store.
An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
Whether to allow the bulk import API to accept history bundles and directly insert historical resource
versions into the FHIR store. Importing resource histories creates resource interactions that appear to have
occurred in the past, which clients may not want to allow. If set to false, history bundles within an import
will fail with an error.
-- Changing this property may recreate the FHIR store (removing all data) --
-- This property can be changed manually in the Google Cloud Healthcare admin console without recreating the FHIR store --
*/
  enableHistoryImport?: boolean;

  /*
The FHIR specification version.
Default value is `STU3`.
Possible values are: `DSTU2`, `STU3`, `R4`.
*/
  version?: string;

  /*
Identifies the dataset addressed by this request. Must be in the format
'projects/{project}/locations/{location}/datasets/{dataset}'


- - -
*/
  dataset?: string;

  /*
Whether to disable resource versioning for this FHIR store. This field can not be changed after the creation
of FHIR store. If set to false, which is the default behavior, all write operations will cause historical
versions to be recorded automatically. The historical versions can be fetched through the history APIs, but
cannot be updated. If set to true, no historical versions will be kept. The server will send back errors for
attempts to read the historical versions.
-- Changing this property may recreate the FHIR store (removing all data) --
*/
  disableResourceVersioning?: boolean;

  /*
The resource name for the FhirStore.
-- Changing this property may recreate the FHIR store (removing all data) --
*/
  name?: string;

  /*
A nested object resource
Structure is documented below.
*/
  notificationConfig?: healthcare_FhirStoreNotificationConfig;

  /*
A list of streaming configs that configure the destinations of streaming export for every resource mutation in
this FHIR store. Each store is allowed to have up to 10 streaming configs. After a new config is added, the next
resource mutation is streamed to the new location in addition to the existing ones. When a location is removed
from the list, the server stops streaming to that location. Before adding a new config, you must add the required
bigquery.dataEditor role to your project's Cloud Healthcare Service Agent service account. Some lag (typically on
the order of dozens of seconds) is expected before the results show up in the streaming destination.
Structure is documented below.
*/
  streamConfigs?: Array<healthcare_FhirStoreStreamConfig>;

  /*
Whether to allow the ExecuteBundle API to accept history bundles, and directly insert and overwrite historical
resource versions into the FHIR store. If set to false, using history bundles fails with an error.
*/
  enableHistoryModifications?: boolean;

  /*
A list of notifcation configs that configure the notification for every resource mutation in this FHIR store.
Structure is documented below.
*/
  notificationConfigs?: Array<healthcare_FhirStoreNotificationConfig>;
}
export class FhirStore extends DS_Resource {
  /*
The resource name for the FhirStore.
-- Changing this property may recreate the FHIR store (removing all data) --
*/
  public name?: string;

  /*
A nested object resource
Structure is documented below.
*/
  public notificationConfig?: healthcare_FhirStoreNotificationConfig;

  /*
Whether to allow the ExecuteBundle API to accept history bundles, and directly insert and overwrite historical
resource versions into the FHIR store. If set to false, using history bundles fails with an error.
*/
  public enableHistoryModifications?: boolean;

  /*
The FHIR specification version.
Default value is `STU3`.
Possible values are: `DSTU2`, `STU3`, `R4`.
*/
  public version?: string;

  /*
Identifies the dataset addressed by this request. Must be in the format
'projects/{project}/locations/{location}/datasets/{dataset}'


- - -
*/
  public dataset?: string;

  /*
If true, overrides the default search behavior for this FHIR store to handling=strict which returns an error for unrecognized search parameters.
If false, uses the FHIR specification default handling=lenient which ignores unrecognized search parameters.
The handling can always be changed from the default on an individual API call by setting the HTTP header Prefer: handling=strict or Prefer: handling=lenient.
*/
  public defaultSearchHandlingStrict?: boolean;

  /*
Whether to disable resource versioning for this FHIR store. This field can not be changed after the creation
of FHIR store. If set to false, which is the default behavior, all write operations will cause historical
versions to be recorded automatically. The historical versions can be fetched through the history APIs, but
cannot be updated. If set to true, no historical versions will be kept. The server will send back errors for
attempts to read the historical versions.
-- Changing this property may recreate the FHIR store (removing all data) --
*/
  public disableResourceVersioning?: boolean;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  // The fully qualified name of this dataset
  public selfLink?: string;

  /*
A list of streaming configs that configure the destinations of streaming export for every resource mutation in
this FHIR store. Each store is allowed to have up to 10 streaming configs. After a new config is added, the next
resource mutation is streamed to the new location in addition to the existing ones. When a location is removed
from the list, the server stops streaming to that location. Before adding a new config, you must add the required
bigquery.dataEditor role to your project's Cloud Healthcare Service Agent service account. Some lag (typically on
the order of dozens of seconds) is expected before the results show up in the streaming destination.
Structure is documented below.
*/
  public streamConfigs?: Array<healthcare_FhirStoreStreamConfig>;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
Whether to allow the bulk import API to accept history bundles and directly insert historical resource
versions into the FHIR store. Importing resource histories creates resource interactions that appear to have
occurred in the past, which clients may not want to allow. If set to false, history bundles within an import
will fail with an error.
-- Changing this property may recreate the FHIR store (removing all data) --
-- This property can be changed manually in the Google Cloud Healthcare admin console without recreating the FHIR store --
*/
  public enableHistoryImport?: boolean;

  /*
A list of notifcation configs that configure the notification for every resource mutation in this FHIR store.
Structure is documented below.
*/
  public notificationConfigs?: Array<healthcare_FhirStoreNotificationConfig>;

  /*
User-supplied key-value pairs used to organize FHIR stores.
Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must
conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}
Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}
No more than 64 labels can be associated with a given store.
An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
Enable parsing of references within complex FHIR data types such as Extensions. If this value is set to ENABLED, then features like referential integrity and Bundle reference rewriting apply to all references. If this flag has not been specified the behavior of the FHIR store will not change, references in complex data types will not be parsed. New stores will have this value set to ENABLED by default after a notification period. Warning: turning on this flag causes processing existing resources to fail if they contain references to non-existent resources.
Possible values are: `COMPLEX_DATA_TYPE_REFERENCE_PARSING_UNSPECIFIED`, `DISABLED`, `ENABLED`.
*/
  public complexDataTypeReferenceParsing?: string;

  /*
Whether to disable referential integrity in this FHIR store. This field is immutable after FHIR store
creation. The default value is false, meaning that the API will enforce referential integrity and fail the
requests that will result in inconsistent state in the FHIR store. When this field is set to true, the API
will skip referential integrity check. Consequently, operations that rely on references, such as
Patient.get$everything, will not return all the results if broken references exist.
-- Changing this property may recreate the FHIR store (removing all data) --
*/
  public disableReferentialIntegrity?: boolean;

  /*
Whether this FHIR store has the updateCreate capability. This determines if the client can use an Update
operation to create a new resource with a client-specified ID. If false, all IDs are server-assigned through
the Create operation and attempts to Update a non-existent resource will return errors. Please treat the audit
logs with appropriate levels of care if client-specified resource IDs contain sensitive data such as patient
identifiers, those IDs will be part of the FHIR resource path recorded in Cloud audit logs and Cloud Pub/Sub
notifications.
*/
  public enableUpdateCreate?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "streamConfigs",
        "A list of streaming configs that configure the destinations of streaming export for every resource mutation in\nthis FHIR store. Each store is allowed to have up to 10 streaming configs. After a new config is added, the next\nresource mutation is streamed to the new location in addition to the existing ones. When a location is removed\nfrom the list, the server stops streaming to that location. Before adding a new config, you must add the required\nbigquery.dataEditor role to your project's Cloud Healthcare Service Agent service account. Some lag (typically on\nthe order of dozens of seconds) is expected before the results show up in the streaming destination.\nStructure is documented below.",
        () => healthcare_FhirStoreStreamConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "notificationConfigs",
        "A list of notifcation configs that configure the notification for every resource mutation in this FHIR store.\nStructure is documented below.",
        () => healthcare_FhirStoreNotificationConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "defaultSearchHandlingStrict",
        "If true, overrides the default search behavior for this FHIR store to handling=strict which returns an error for unrecognized search parameters.\nIf false, uses the FHIR specification default handling=lenient which ignores unrecognized search parameters.\nThe handling can always be changed from the default on an individual API call by setting the HTTP header Prefer: handling=strict or Prefer: handling=lenient.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "disableReferentialIntegrity",
        "Whether to disable referential integrity in this FHIR store. This field is immutable after FHIR store\ncreation. The default value is false, meaning that the API will enforce referential integrity and fail the\nrequests that will result in inconsistent state in the FHIR store. When this field is set to true, the API\nwill skip referential integrity check. Consequently, operations that rely on references, such as\nPatient.get$everything, will not return all the results if broken references exist.\n** Changing this property may recreate the FHIR store (removing all data) **",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "dataset",
        "Identifies the dataset addressed by this request. Must be in the format\n'projects/{project}/locations/{location}/datasets/{dataset}'\n\n\n- - -",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableUpdateCreate",
        "Whether this FHIR store has the updateCreate capability. This determines if the client can use an Update\noperation to create a new resource with a client-specified ID. If false, all IDs are server-assigned through\nthe Create operation and attempts to Update a non-existent resource will return errors. Please treat the audit\nlogs with appropriate levels of care if client-specified resource IDs contain sensitive data such as patient\nidentifiers, those IDs will be part of the FHIR resource path recorded in Cloud audit logs and Cloud Pub/Sub\nnotifications.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        'User-supplied key-value pairs used to organize FHIR stores.\nLabel keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must\nconform to the following PCRE regular expression: [\\p{Ll}\\p{Lo}][\\p{Ll}\\p{Lo}\\p{N}_-]{0,62}\nLabel values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128\nbytes, and must conform to the following PCRE regular expression: [\\p{Ll}\\p{Lo}\\p{N}_-]{0,63}\nNo more than 64 labels can be associated with a given store.\nAn object containing a list of "key": value pairs.\nExample: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableHistoryModifications",
        "Whether to allow the ExecuteBundle API to accept history bundles, and directly insert and overwrite historical\nresource versions into the FHIR store. If set to false, using history bundles fails with an error.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "complexDataTypeReferenceParsing",
        "Enable parsing of references within complex FHIR data types such as Extensions. If this value is set to ENABLED, then features like referential integrity and Bundle reference rewriting apply to all references. If this flag has not been specified the behavior of the FHIR store will not change, references in complex data types will not be parsed. New stores will have this value set to ENABLED by default after a notification period. Warning: turning on this flag causes processing existing resources to fail if they contain references to non-existent resources.\nPossible values are: `COMPLEX_DATA_TYPE_REFERENCE_PARSING_UNSPECIFIED`, `DISABLED`, `ENABLED`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "disableResourceVersioning",
        "Whether to disable resource versioning for this FHIR store. This field can not be changed after the creation\nof FHIR store. If set to false, which is the default behavior, all write operations will cause historical\nversions to be recorded automatically. The historical versions can be fetched through the history APIs, but\ncannot be updated. If set to true, no historical versions will be kept. The server will send back errors for\nattempts to read the historical versions.\n** Changing this property may recreate the FHIR store (removing all data) **",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The resource name for the FhirStore.\n** Changing this property may recreate the FHIR store (removing all data) **",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "notificationConfig",
        "A nested object resource\nStructure is documented below.",
        () => healthcare_FhirStoreNotificationConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableHistoryImport",
        "Whether to allow the bulk import API to accept history bundles and directly insert historical resource\nversions into the FHIR store. Importing resource histories creates resource interactions that appear to have\noccurred in the past, which clients may not want to allow. If set to false, history bundles within an import\nwill fail with an error.\n** Changing this property may recreate the FHIR store (removing all data) **\n** This property can be changed manually in the Google Cloud Healthcare admin console without recreating the FHIR store **",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "version",
        "The FHIR specification version.\nDefault value is `STU3`.\nPossible values are: `DSTU2`, `STU3`, `R4`.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
