import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2_InstanceEnclaveOptions {
  /*
Whether Nitro Enclaves will be enabled on the instance. Defaults to `false`.

For more information, see the documentation on [Nitro Enclaves](https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html).
*/
  enabled?: boolean;
}

export function ec2_InstanceEnclaveOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Whether Nitro Enclaves will be enabled on the instance. Defaults to `false`.\n\nFor more information, see the documentation on [Nitro Enclaves](https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html).',
      () => [],
      false,
      true,
    ),
  ];
}
