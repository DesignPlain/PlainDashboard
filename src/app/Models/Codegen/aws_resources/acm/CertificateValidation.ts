import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface CertificateValidationArgs {
  // ARN of the certificate that is being validated.
  certificateArn?: string;

  // List of FQDNs that implement the validation. Only valid for DNS validation method ACM certificates. If this is set, the resource can implement additional sanity checks and has an explicit dependency on the resource that is implementing the validation
  validationRecordFqdns?: Array<string>;
}
export class CertificateValidation extends Resource {
  // ARN of the certificate that is being validated.
  public certificateArn?: string;

  // List of FQDNs that implement the validation. Only valid for DNS validation method ACM certificates. If this is set, the resource can implement additional sanity checks and has an explicit dependency on the resource that is implementing the validation
  public validationRecordFqdns?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "certificateArn",
        "ARN of the certificate that is being validated.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "validationRecordFqdns",
        "List of FQDNs that implement the validation. Only valid for DNS validation method ACM certificates. If this is set, the resource can implement additional sanity checks and has an explicit dependency on the resource that is implementing the validation",
        InputType_String_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
