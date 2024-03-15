export interface LakeAssetStatus {
  // Number of active assets.
  ActiveAssets?: number;

  // Number of assets that are in process of updating the security policy on attached resources.
  SecurityPolicyApplyingAssets?: number;

  // Output only. The time when the lake was last updated.
  UpdateTime?: string;
}
