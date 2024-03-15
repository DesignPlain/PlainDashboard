export interface RegionNetworkFirewallPolicyRuleMatchSrcSecureTag {
  // Name of the secure tag, created with TagManager's TagValue API. @pattern tagValues/[0-9]+
  Name?: string;

  // [Output Only] State of the secure tag, either `EFFECTIVE` or `INEFFECTIVE`. A secure tag is `INEFFECTIVE` when it is deleted or its network is deleted.
  State?: string;
}
