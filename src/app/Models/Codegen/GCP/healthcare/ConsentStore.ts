import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ConsentStoreArgs {
  /*
The name of this ConsentStore, for example:
"consent1"
*/
  Name?: string;

  /*
Identifies the dataset addressed by this request. Must be in the format
'projects/{project}/locations/{location}/datasets/{dataset}'


- - -
*/
  Dataset?: string;

  /*
Default time to live for consents in this store. Must be at least 24 hours. Updating this field will not affect the expiration time of existing consents.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
*/
  DefaultConsentTtl?: string;

  // If true, [consents.patch] [google.cloud.healthcare.v1.consent.UpdateConsent] creates the consent if it does not already exist.
  EnableConsentCreateOnUpdate?: boolean;

  /*
User-supplied key-value pairs used to organize Consent stores.
Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must
conform to the following PCRE regular expression: `[\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}`
Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
bytes, and must conform to the following PCRE regular expression: `[\p{Ll}\p{Lo}\p{N}_-]{0,63}`
No more than 64 labels can be associated with a given store.
An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;
}
export class ConsentStore extends Resource {
  // If true, [consents.patch] [google.cloud.healthcare.v1.consent.UpdateConsent] creates the consent if it does not already exist.
  public EnableConsentCreateOnUpdate?: boolean;

  /*
User-supplied key-value pairs used to organize Consent stores.
Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must
conform to the following PCRE regular expression: `[\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}`
Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
bytes, and must conform to the following PCRE regular expression: `[\p{Ll}\p{Lo}\p{N}_-]{0,63}`
No more than 64 labels can be associated with a given store.
An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The name of this ConsentStore, for example:
"consent1"
*/
  public Name?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
Identifies the dataset addressed by this request. Must be in the format
'projects/{project}/locations/{location}/datasets/{dataset}'


- - -
*/
  public Dataset?: string;

  /*
Default time to live for consents in this store. Must be at least 24 hours. Updating this field will not affect the expiration time of existing consents.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
*/
  public DefaultConsentTtl?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Dataset",
        "Identifies the dataset addressed by this request. Must be in the format\n'projects/{project}/locations/{location}/datasets/{dataset}'\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "DefaultConsentTtl",
        "Default time to live for consents in this store. Must be at least 24 hours. Updating this field will not affect the expiration time of existing consents.\nA duration in seconds with up to nine fractional digits, terminated by 's'. Example: \"3.5s\".",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "EnableConsentCreateOnUpdate",
        "If true, [consents.patch] [google.cloud.healthcare.v1.consent.UpdateConsent] creates the consent if it does not already exist.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        'User-supplied key-value pairs used to organize Consent stores.\nLabel keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must\nconform to the following PCRE regular expression: `[\\p{Ll}\\p{Lo}][\\p{Ll}\\p{Lo}\\p{N}_-]{0,62}`\nLabel values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128\nbytes, and must conform to the following PCRE regular expression: `[\\p{Ll}\\p{Lo}\\p{N}_-]{0,63}`\nNo more than 64 labels can be associated with a given store.\nAn object containing a list of "key": value pairs.\nExample: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        'The name of this ConsentStore, for example:\n"consent1"',
      ),
    ];
  }
}
