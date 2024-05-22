import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  certificateauthority_CertificateTemplatePredefinedValues,
  certificateauthority_CertificateTemplatePredefinedValues_GetTypes,
} from "../types/certificateauthority_CertificateTemplatePredefinedValues";
import {
  certificateauthority_CertificateTemplateIdentityConstraints,
  certificateauthority_CertificateTemplateIdentityConstraints_GetTypes,
} from "../types/certificateauthority_CertificateTemplateIdentityConstraints";
import {
  certificateauthority_CertificateTemplatePassthroughExtensions,
  certificateauthority_CertificateTemplatePassthroughExtensions_GetTypes,
} from "../types/certificateauthority_CertificateTemplatePassthroughExtensions";

export interface CertificateTemplateArgs {
  // Optional. Describes constraints on identities that may be appear in Certificates issued using this template. If this is omitted, then this template will not add restrictions on a certificate's identity.
  identityConstraints?: certificateauthority_CertificateTemplateIdentityConstraints;

  /*
Optional. Labels with user-defined metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // The location for the resource
  location?: string;

  // The resource name for this CertificateTemplate in the format `projects/-/locations/-/certificateTemplates/-`.
  name?: string;

  // Optional. Describes the set of X.509 extensions that may appear in a Certificate issued using this CertificateTemplate. If a certificate request sets extensions that don't appear in the passthrough_extensions, those extensions will be dropped. If the issuing CaPool's IssuancePolicy defines baseline_values that don't appear here, the certificate issuance request will fail. If this is omitted, then this template will not add restrictions on a certificate's X.509 extensions. These constraints do not apply to X.509 extensions set in this CertificateTemplate's predefined_values.
  passthroughExtensions?: certificateauthority_CertificateTemplatePassthroughExtensions;

  // Optional. A set of X.509 values that will be applied to all issued certificates that use this template. If the certificate request includes conflicting values for the same properties, they will be overwritten by the values defined here. If the issuing CaPool's IssuancePolicy defines conflicting baseline_values for the same properties, the certificate issuance request will fail.
  predefinedValues?: certificateauthority_CertificateTemplatePredefinedValues;

  // The project for the resource
  project?: string;

  // Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
  description?: string;
}
export class CertificateTemplate extends Resource {
  // The resource name for this CertificateTemplate in the format `projects/-/locations/-/certificateTemplates/-`.
  public name?: string;

  // The project for the resource
  public project?: string;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public pulumiLabels?: Map<string, string>;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  // Optional. Describes constraints on identities that may be appear in Certificates issued using this template. If this is omitted, then this template will not add restrictions on a certificate's identity.
  public identityConstraints?: certificateauthority_CertificateTemplateIdentityConstraints;

  /*
Optional. Labels with user-defined metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // The location for the resource
  public location?: string;

  // Output only. The time at which this CertificateTemplate was updated.
  public updateTime?: string;

  // Output only. The time at which this CertificateTemplate was created.
  public createTime?: string;

  // Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
  public description?: string;

  // Optional. Describes the set of X.509 extensions that may appear in a Certificate issued using this CertificateTemplate. If a certificate request sets extensions that don't appear in the passthrough_extensions, those extensions will be dropped. If the issuing CaPool's IssuancePolicy defines baseline_values that don't appear here, the certificate issuance request will fail. If this is omitted, then this template will not add restrictions on a certificate's X.509 extensions. These constraints do not apply to X.509 extensions set in this CertificateTemplate's predefined_values.
  public passthroughExtensions?: certificateauthority_CertificateTemplatePassthroughExtensions;

  // Optional. A set of X.509 values that will be applied to all issued certificates that use this template. If the certificate request includes conflicting values for the same properties, they will be overwritten by the values defined here. If the issuing CaPool's IssuancePolicy defines conflicting baseline_values for the same properties, the certificate issuance request will fail.
  public predefinedValues?: certificateauthority_CertificateTemplatePredefinedValues;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The resource name for this CertificateTemplate in the format `projects/*/locations/*/certificateTemplates/*`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "passthroughExtensions",
        "Optional. Describes the set of X.509 extensions that may appear in a Certificate issued using this CertificateTemplate. If a certificate request sets extensions that don't appear in the passthrough_extensions, those extensions will be dropped. If the issuing CaPool's IssuancePolicy defines baseline_values that don't appear here, the certificate issuance request will fail. If this is omitted, then this template will not add restrictions on a certificate's X.509 extensions. These constraints do not apply to X.509 extensions set in this CertificateTemplate's predefined_values.",
        certificateauthority_CertificateTemplatePassthroughExtensions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "predefinedValues",
        "Optional. A set of X.509 values that will be applied to all issued certificates that use this template. If the certificate request includes conflicting values for the same properties, they will be overwritten by the values defined here. If the issuing CaPool's IssuancePolicy defines conflicting baseline_values for the same properties, the certificate issuance request will fail.",
        certificateauthority_CertificateTemplatePredefinedValues_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The project for the resource",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "identityConstraints",
        "Optional. Describes constraints on identities that may be appear in Certificates issued using this template. If this is omitted, then this template will not add restrictions on a certificate's identity.",
        certificateauthority_CertificateTemplateIdentityConstraints_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Optional. Labels with user-defined metadata.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location for the resource",
        [],
        true,
        true,
      ),
    ];
  }
}
