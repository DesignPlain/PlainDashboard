import { DynamicUIProps } from 'src/app/components/resource-config/resource-config.component';
import { InputType } from '../../../enum/InputType';
import { Resource } from 'src/app/Models/CloudResource';

// TODO: Currently the class member name and the UI display name is same, we need to change the logic \
//       so that we can have space in display name. Might need some changes related to the dynamic    \
//       input field rendering logic

export class GCP_StorageBucket extends Resource {
  public Location?: string;
  public UniformBucketLevelAccess?: boolean;
  public Role?: string;
  public Members?: string[];
  constructor() {
    super('StorageBucket', 'GCP');
  }

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String,'PublicAccessPrevention',  'PublicAccessPrevention'),
      //   ['Cors', InputType.DropDown],
      //   ['Website', InputType.String],
      //   ['Logging', InputType.String],
      //   ['CustomPlacementConfig', InputType.String],
      //   ['Autoclass', InputType.String],
      //   ['StorageClass', InputType.String],
      //   ['RetentionPolicy', InputType.String],
      //   ['LifecycleRules', InputType.DropDown],
      //   ['Location', InputType.String],
      //   ['Project', InputType.String],
      //   ['RequesterPays', InputType.CheckBox],
      //   ['Labels', InputType.String],
      //   ['Name', InputType.String],
      //   ['EnableObjectRetention', InputType.CheckBox],
      //   ['ForceDestroy', InputType.CheckBox],
      //   ['DefaultEventBasedHold', InputType.CheckBox],
      //   ['Rpo', InputType.String],
      //   ['Versioning', InputType.String],
      //   ['UniformBucketLevelAccess', InputType.CheckBox],
      //   ['Encryption', InputType.String],
      // ]);
    ];
  }
}
