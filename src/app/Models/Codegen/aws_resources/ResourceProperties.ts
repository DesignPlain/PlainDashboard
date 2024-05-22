import { AWS_ResourceType } from './ResourceType';
import { Resource } from 'src/app/Models/CloudResource';
import { DynamicUIProps } from 'src/app/components/resource-config/resource-config.component';
import { Analyzer as ACCESSANALYZER_Analyzer } from './accessanalyzer/Analyzer';
import { ArchiveRule as ACCESSANALYZER_ArchiveRule } from './accessanalyzer/ArchiveRule';
import { AlternativeContact as ACCOUNT_AlternativeContact } from './account/AlternativeContact';
import { PrimaryContact as ACCOUNT_PrimaryContact } from './account/PrimaryContact';
import { Certificate as ACM_Certificate } from './acm/Certificate';
import { CertificateValidation as ACM_CertificateValidation } from './acm/CertificateValidation';
import { Certificate as ACMPCA_Certificate } from './acmpca/Certificate';
import { CertificateAuthority as ACMPCA_CertificateAuthority } from './acmpca/CertificateAuthority';
import { CertificateAuthorityCertificate as ACMPCA_CertificateAuthorityCertificate } from './acmpca/CertificateAuthorityCertificate';
import { Permission as ACMPCA_Permission } from './acmpca/Permission';
import { Policy as ACMPCA_Policy } from './acmpca/Policy';
import { Listener as ALB_Listener } from './alb/Listener';
import { ListenerCertificate as ALB_ListenerCertificate } from './alb/ListenerCertificate';
import { ListenerRule as ALB_ListenerRule } from './alb/ListenerRule';
import { LoadBalancer as ALB_LoadBalancer } from './alb/LoadBalancer';
import { TargetGroup as ALB_TargetGroup } from './alb/TargetGroup';
import { TargetGroupAttachment as ALB_TargetGroupAttachment } from './alb/TargetGroupAttachment';
import { AlertManagerDefinition as AMP_AlertManagerDefinition } from './amp/AlertManagerDefinition';
import { RuleGroupNamespace as AMP_RuleGroupNamespace } from './amp/RuleGroupNamespace';
import { Scraper as AMP_Scraper } from './amp/Scraper';
import { Workspace as AMP_Workspace } from './amp/Workspace';
import { App as AMPLIFY_App } from './amplify/App';
import { BackendEnvironment as AMPLIFY_BackendEnvironment } from './amplify/BackendEnvironment';
import { Branch as AMPLIFY_Branch } from './amplify/Branch';
import { DomainAssociation as AMPLIFY_DomainAssociation } from './amplify/DomainAssociation';
import { Webhook as AMPLIFY_Webhook } from './amplify/Webhook';
import { Account as APIGATEWAY_Account } from './apigateway/Account';
import { ApiKey as APIGATEWAY_ApiKey } from './apigateway/ApiKey';
import { Authorizer as APIGATEWAY_Authorizer } from './apigateway/Authorizer';
import { BasePathMapping as APIGATEWAY_BasePathMapping } from './apigateway/BasePathMapping';
import { ClientCertificate as APIGATEWAY_ClientCertificate } from './apigateway/ClientCertificate';
import { Deployment as APIGATEWAY_Deployment } from './apigateway/Deployment';
import { DocumentationPart as APIGATEWAY_DocumentationPart } from './apigateway/DocumentationPart';
import { DocumentationVersion as APIGATEWAY_DocumentationVersion } from './apigateway/DocumentationVersion';
import { DomainName as APIGATEWAY_DomainName } from './apigateway/DomainName';
import { Integration as APIGATEWAY_Integration } from './apigateway/Integration';
import { IntegrationResponse as APIGATEWAY_IntegrationResponse } from './apigateway/IntegrationResponse';
import { Method as APIGATEWAY_Method } from './apigateway/Method';
import { MethodResponse as APIGATEWAY_MethodResponse } from './apigateway/MethodResponse';
import { MethodSettings as APIGATEWAY_MethodSettings } from './apigateway/MethodSettings';
import { Model as APIGATEWAY_Model } from './apigateway/Model';
import { RequestValidator as APIGATEWAY_RequestValidator } from './apigateway/RequestValidator';
import { Resource as APIGATEWAY_Resource } from './apigateway/Resource';
import { Response as APIGATEWAY_Response } from './apigateway/Response';
import { RestApi as APIGATEWAY_RestApi } from './apigateway/RestApi';
import { RestApiPolicy as APIGATEWAY_RestApiPolicy } from './apigateway/RestApiPolicy';
import { Stage as APIGATEWAY_Stage } from './apigateway/Stage';
import { UsagePlan as APIGATEWAY_UsagePlan } from './apigateway/UsagePlan';
import { UsagePlanKey as APIGATEWAY_UsagePlanKey } from './apigateway/UsagePlanKey';
import { VpcLink as APIGATEWAY_VpcLink } from './apigateway/VpcLink';
import { Api as APIGATEWAYV2_Api } from './apigatewayv2/Api';
import { ApiMapping as APIGATEWAYV2_ApiMapping } from './apigatewayv2/ApiMapping';
import { Authorizer as APIGATEWAYV2_Authorizer } from './apigatewayv2/Authorizer';
import { Deployment as APIGATEWAYV2_Deployment } from './apigatewayv2/Deployment';
import { DomainName as APIGATEWAYV2_DomainName } from './apigatewayv2/DomainName';
import { Integration as APIGATEWAYV2_Integration } from './apigatewayv2/Integration';
import { IntegrationResponse as APIGATEWAYV2_IntegrationResponse } from './apigatewayv2/IntegrationResponse';
import { Model as APIGATEWAYV2_Model } from './apigatewayv2/Model';
import { Route as APIGATEWAYV2_Route } from './apigatewayv2/Route';
import { RouteResponse as APIGATEWAYV2_RouteResponse } from './apigatewayv2/RouteResponse';
import { Stage as APIGATEWAYV2_Stage } from './apigatewayv2/Stage';
import { VpcLink as APIGATEWAYV2_VpcLink } from './apigatewayv2/VpcLink';
import { Policy as APPAUTOSCALING_Policy } from './appautoscaling/Policy';
import { ScheduledAction as APPAUTOSCALING_ScheduledAction } from './appautoscaling/ScheduledAction';
import { Target as APPAUTOSCALING_Target } from './appautoscaling/Target';
import { Application as APPCONFIG_Application } from './appconfig/Application';
import { ConfigurationProfile as APPCONFIG_ConfigurationProfile } from './appconfig/ConfigurationProfile';
import { Deployment as APPCONFIG_Deployment } from './appconfig/Deployment';
import { DeploymentStrategy as APPCONFIG_DeploymentStrategy } from './appconfig/DeploymentStrategy';
import { Environment as APPCONFIG_Environment } from './appconfig/Environment';
import { EventIntegration as APPCONFIG_EventIntegration } from './appconfig/EventIntegration';
import { Extension as APPCONFIG_Extension } from './appconfig/Extension';
import { ExtensionAssociation as APPCONFIG_ExtensionAssociation } from './appconfig/ExtensionAssociation';
import { HostedConfigurationVersion as APPCONFIG_HostedConfigurationVersion } from './appconfig/HostedConfigurationVersion';
import { ConnectorProfile as APPFLOW_ConnectorProfile } from './appflow/ConnectorProfile';
import { Flow as APPFLOW_Flow } from './appflow/Flow';
import { DataIntegration as APPINTEGRATIONS_DataIntegration } from './appintegrations/DataIntegration';
import { Application as APPLICATIONINSIGHTS_Application } from './applicationinsights/Application';
import { GatewayRoute as APPMESH_GatewayRoute } from './appmesh/GatewayRoute';
import { Mesh as APPMESH_Mesh } from './appmesh/Mesh';
import { Route as APPMESH_Route } from './appmesh/Route';
import { VirtualGateway as APPMESH_VirtualGateway } from './appmesh/VirtualGateway';
import { VirtualNode as APPMESH_VirtualNode } from './appmesh/VirtualNode';
import { VirtualRouter as APPMESH_VirtualRouter } from './appmesh/VirtualRouter';
import { VirtualService as APPMESH_VirtualService } from './appmesh/VirtualService';
import { AutoScalingConfigurationVersion as APPRUNNER_AutoScalingConfigurationVersion } from './apprunner/AutoScalingConfigurationVersion';
import { Connection as APPRUNNER_Connection } from './apprunner/Connection';
import { CustomDomainAssociation as APPRUNNER_CustomDomainAssociation } from './apprunner/CustomDomainAssociation';
import { DefaultAutoScalingConfigurationVersion as APPRUNNER_DefaultAutoScalingConfigurationVersion } from './apprunner/DefaultAutoScalingConfigurationVersion';
import { Deployment as APPRUNNER_Deployment } from './apprunner/Deployment';
import { ObservabilityConfiguration as APPRUNNER_ObservabilityConfiguration } from './apprunner/ObservabilityConfiguration';
import { Service as APPRUNNER_Service } from './apprunner/Service';
import { VpcConnector as APPRUNNER_VpcConnector } from './apprunner/VpcConnector';
import { VpcIngressConnection as APPRUNNER_VpcIngressConnection } from './apprunner/VpcIngressConnection';
import { DirectoryConfig as APPSTREAM_DirectoryConfig } from './appstream/DirectoryConfig';
import { Fleet as APPSTREAM_Fleet } from './appstream/Fleet';
import { FleetStackAssociation as APPSTREAM_FleetStackAssociation } from './appstream/FleetStackAssociation';
import { ImageBuilder as APPSTREAM_ImageBuilder } from './appstream/ImageBuilder';
import { Stack as APPSTREAM_Stack } from './appstream/Stack';
import { User as APPSTREAM_User } from './appstream/User';
import { UserStackAssociation as APPSTREAM_UserStackAssociation } from './appstream/UserStackAssociation';
import { ApiCache as APPSYNC_ApiCache } from './appsync/ApiCache';
import { ApiKey as APPSYNC_ApiKey } from './appsync/ApiKey';
import { DataSource as APPSYNC_DataSource } from './appsync/DataSource';
import { DomainName as APPSYNC_DomainName } from './appsync/DomainName';
import { DomainNameApiAssociation as APPSYNC_DomainNameApiAssociation } from './appsync/DomainNameApiAssociation';
import { Function as APPSYNC_Function } from './appsync/Function';
import { GraphQLApi as APPSYNC_GraphQLApi } from './appsync/GraphQLApi';
import { Resolver as APPSYNC_Resolver } from './appsync/Resolver';
import { Type as APPSYNC_Type } from './appsync/Type';
import { Database as ATHENA_Database } from './athena/Database';
import { DataCatalog as ATHENA_DataCatalog } from './athena/DataCatalog';
import { NamedQuery as ATHENA_NamedQuery } from './athena/NamedQuery';
import { PreparedStatement as ATHENA_PreparedStatement } from './athena/PreparedStatement';
import { Workgroup as ATHENA_Workgroup } from './athena/Workgroup';
import { AccountRegistration as AUDITMANAGER_AccountRegistration } from './auditmanager/AccountRegistration';
import { Assessment as AUDITMANAGER_Assessment } from './auditmanager/Assessment';
import { AssessmentDelegation as AUDITMANAGER_AssessmentDelegation } from './auditmanager/AssessmentDelegation';
import { AssessmentReport as AUDITMANAGER_AssessmentReport } from './auditmanager/AssessmentReport';
import { Control as AUDITMANAGER_Control } from './auditmanager/Control';
import { Framework as AUDITMANAGER_Framework } from './auditmanager/Framework';
import { FrameworkShare as AUDITMANAGER_FrameworkShare } from './auditmanager/FrameworkShare';
import { OrganizationAdminAccountRegistration as AUDITMANAGER_OrganizationAdminAccountRegistration } from './auditmanager/OrganizationAdminAccountRegistration';
import { Attachment as AUTOSCALING_Attachment } from './autoscaling/Attachment';
import { Group as AUTOSCALING_Group } from './autoscaling/Group';
import { LifecycleHook as AUTOSCALING_LifecycleHook } from './autoscaling/LifecycleHook';
import { Notification as AUTOSCALING_Notification } from './autoscaling/Notification';
import { Policy as AUTOSCALING_Policy } from './autoscaling/Policy';
import { Schedule as AUTOSCALING_Schedule } from './autoscaling/Schedule';
import { Tag as AUTOSCALING_Tag } from './autoscaling/Tag';
import { TrafficSourceAttachment as AUTOSCALING_TrafficSourceAttachment } from './autoscaling/TrafficSourceAttachment';
import { ScalingPlan as AUTOSCALINGPLANS_ScalingPlan } from './autoscalingplans/ScalingPlan';
import { Framework as BACKUP_Framework } from './backup/Framework';
import { GlobalSettings as BACKUP_GlobalSettings } from './backup/GlobalSettings';
import { Plan as BACKUP_Plan } from './backup/Plan';
import { RegionSettings as BACKUP_RegionSettings } from './backup/RegionSettings';
import { ReportPlan as BACKUP_ReportPlan } from './backup/ReportPlan';
import { Selection as BACKUP_Selection } from './backup/Selection';
import { Vault as BACKUP_Vault } from './backup/Vault';
import { VaultLockConfiguration as BACKUP_VaultLockConfiguration } from './backup/VaultLockConfiguration';
import { VaultNotifications as BACKUP_VaultNotifications } from './backup/VaultNotifications';
import { VaultPolicy as BACKUP_VaultPolicy } from './backup/VaultPolicy';
import { ComputeEnvironment as BATCH_ComputeEnvironment } from './batch/ComputeEnvironment';
import { JobDefinition as BATCH_JobDefinition } from './batch/JobDefinition';
import { JobQueue as BATCH_JobQueue } from './batch/JobQueue';
import { SchedulingPolicy as BATCH_SchedulingPolicy } from './batch/SchedulingPolicy';
import { CustomModel as BEDROCK_CustomModel } from './bedrock/CustomModel';
import { ProvisionedModelThroughput as BEDROCK_ProvisionedModelThroughput } from './bedrock/ProvisionedModelThroughput';
import { InvocationLoggingConfiguration as BEDROCKMODEL_InvocationLoggingConfiguration } from './bedrockmodel/InvocationLoggingConfiguration';
import { Budget as BUDGETS_Budget } from './budgets/Budget';
import { BudgetAction as BUDGETS_BudgetAction } from './budgets/BudgetAction';
import { AggregateAuthorization as CFG_AggregateAuthorization } from './cfg/AggregateAuthorization';
import { ConfigurationAggregator as CFG_ConfigurationAggregator } from './cfg/ConfigurationAggregator';
import { ConformancePack as CFG_ConformancePack } from './cfg/ConformancePack';
import { DeliveryChannel as CFG_DeliveryChannel } from './cfg/DeliveryChannel';
import { OrganizationConformancePack as CFG_OrganizationConformancePack } from './cfg/OrganizationConformancePack';
import { OrganizationCustomPolicyRule as CFG_OrganizationCustomPolicyRule } from './cfg/OrganizationCustomPolicyRule';
import { OrganizationCustomRule as CFG_OrganizationCustomRule } from './cfg/OrganizationCustomRule';
import { OrganizationManagedRule as CFG_OrganizationManagedRule } from './cfg/OrganizationManagedRule';
import { Recorder as CFG_Recorder } from './cfg/Recorder';
import { RecorderStatus as CFG_RecorderStatus } from './cfg/RecorderStatus';
import { RemediationConfiguration as CFG_RemediationConfiguration } from './cfg/RemediationConfiguration';
import { RetentionConfiguration as CFG_RetentionConfiguration } from './cfg/RetentionConfiguration';
import { Rule as CFG_Rule } from './cfg/Rule';
import { SdkvoiceGlobalSettings as CHIME_SdkvoiceGlobalSettings } from './chime/SdkvoiceGlobalSettings';
import { SdkvoiceSipMediaApplication as CHIME_SdkvoiceSipMediaApplication } from './chime/SdkvoiceSipMediaApplication';
import { SdkvoiceSipRule as CHIME_SdkvoiceSipRule } from './chime/SdkvoiceSipRule';
import { SdkvoiceVoiceProfileDomain as CHIME_SdkvoiceVoiceProfileDomain } from './chime/SdkvoiceVoiceProfileDomain';
import { VoiceConnector as CHIME_VoiceConnector } from './chime/VoiceConnector';
import { VoiceConnectorGroup as CHIME_VoiceConnectorGroup } from './chime/VoiceConnectorGroup';
import { VoiceConnectorLogging as CHIME_VoiceConnectorLogging } from './chime/VoiceConnectorLogging';
import { VoiceConnectorOrganization as CHIME_VoiceConnectorOrganization } from './chime/VoiceConnectorOrganization';
import { VoiceConnectorStreaming as CHIME_VoiceConnectorStreaming } from './chime/VoiceConnectorStreaming';
import { VoiceConnectorTermination as CHIME_VoiceConnectorTermination } from './chime/VoiceConnectorTermination';
import { VoiceConnectorTerminationCredentials as CHIME_VoiceConnectorTerminationCredentials } from './chime/VoiceConnectorTerminationCredentials';
import { MediaInsightsPipelineConfiguration as CHIMESDKMEDIAPIPELINES_MediaInsightsPipelineConfiguration } from './chimesdkmediapipelines/MediaInsightsPipelineConfiguration';
import { Collaboration as CLEANROOMS_Collaboration } from './cleanrooms/Collaboration';
import { ConfiguredTable as CLEANROOMS_ConfiguredTable } from './cleanrooms/ConfiguredTable';
import { EnvironmentEC2 as CLOUD9_EnvironmentEC2 } from './cloud9/EnvironmentEC2';
import { EnvironmentMembership as CLOUD9_EnvironmentMembership } from './cloud9/EnvironmentMembership';
import { Resource as CLOUDCONTROL_Resource } from './cloudcontrol/Resource';
import { CloudFormationType as CLOUDFORMATION_CloudFormationType } from './cloudformation/CloudFormationType';
import { Stack as CLOUDFORMATION_Stack } from './cloudformation/Stack';
import { StackSet as CLOUDFORMATION_StackSet } from './cloudformation/StackSet';
import { StackSetInstance as CLOUDFORMATION_StackSetInstance } from './cloudformation/StackSetInstance';
import { CachePolicy as CLOUDFRONT_CachePolicy } from './cloudfront/CachePolicy';
import { ContinuousDeploymentPolicy as CLOUDFRONT_ContinuousDeploymentPolicy } from './cloudfront/ContinuousDeploymentPolicy';
import { Distribution as CLOUDFRONT_Distribution } from './cloudfront/Distribution';
import { FieldLevelEncryptionConfig as CLOUDFRONT_FieldLevelEncryptionConfig } from './cloudfront/FieldLevelEncryptionConfig';
import { FieldLevelEncryptionProfile as CLOUDFRONT_FieldLevelEncryptionProfile } from './cloudfront/FieldLevelEncryptionProfile';
import { Function as CLOUDFRONT_Function } from './cloudfront/Function';
import { KeyGroup as CLOUDFRONT_KeyGroup } from './cloudfront/KeyGroup';
import { KeyValueStore as CLOUDFRONT_KeyValueStore } from './cloudfront/KeyValueStore';
import { MonitoringSubscription as CLOUDFRONT_MonitoringSubscription } from './cloudfront/MonitoringSubscription';
import { OriginAccessControl as CLOUDFRONT_OriginAccessControl } from './cloudfront/OriginAccessControl';
import { OriginAccessIdentity as CLOUDFRONT_OriginAccessIdentity } from './cloudfront/OriginAccessIdentity';
import { OriginRequestPolicy as CLOUDFRONT_OriginRequestPolicy } from './cloudfront/OriginRequestPolicy';
import { PublicKey as CLOUDFRONT_PublicKey } from './cloudfront/PublicKey';
import { RealtimeLogConfig as CLOUDFRONT_RealtimeLogConfig } from './cloudfront/RealtimeLogConfig';
import { ResponseHeadersPolicy as CLOUDFRONT_ResponseHeadersPolicy } from './cloudfront/ResponseHeadersPolicy';
import { Cluster as CLOUDHSMV2_Cluster } from './cloudhsmv2/Cluster';
import { Hsm as CLOUDHSMV2_Hsm } from './cloudhsmv2/Hsm';
import { Domain as CLOUDSEARCH_Domain } from './cloudsearch/Domain';
import { DomainServiceAccessPolicy as CLOUDSEARCH_DomainServiceAccessPolicy } from './cloudsearch/DomainServiceAccessPolicy';
import { EventDataStore as CLOUDTRAIL_EventDataStore } from './cloudtrail/EventDataStore';
import { Trail as CLOUDTRAIL_Trail } from './cloudtrail/Trail';
import { CompositeAlarm as CLOUDWATCH_CompositeAlarm } from './cloudwatch/CompositeAlarm';
import { Dashboard as CLOUDWATCH_Dashboard } from './cloudwatch/Dashboard';
import { EventApiDestination as CLOUDWATCH_EventApiDestination } from './cloudwatch/EventApiDestination';
import { EventArchive as CLOUDWATCH_EventArchive } from './cloudwatch/EventArchive';
import { EventBus as CLOUDWATCH_EventBus } from './cloudwatch/EventBus';
import { EventBusPolicy as CLOUDWATCH_EventBusPolicy } from './cloudwatch/EventBusPolicy';
import { EventConnection as CLOUDWATCH_EventConnection } from './cloudwatch/EventConnection';
import { EventEndpoint as CLOUDWATCH_EventEndpoint } from './cloudwatch/EventEndpoint';
import { EventPermission as CLOUDWATCH_EventPermission } from './cloudwatch/EventPermission';
import { EventRule as CLOUDWATCH_EventRule } from './cloudwatch/EventRule';
import { EventTarget as CLOUDWATCH_EventTarget } from './cloudwatch/EventTarget';
import { InternetMonitor as CLOUDWATCH_InternetMonitor } from './cloudwatch/InternetMonitor';
import { LogDataProtectionPolicy as CLOUDWATCH_LogDataProtectionPolicy } from './cloudwatch/LogDataProtectionPolicy';
import { LogDestination as CLOUDWATCH_LogDestination } from './cloudwatch/LogDestination';
import { LogDestinationPolicy as CLOUDWATCH_LogDestinationPolicy } from './cloudwatch/LogDestinationPolicy';
import { LogGroup as CLOUDWATCH_LogGroup } from './cloudwatch/LogGroup';
import { LogMetricFilter as CLOUDWATCH_LogMetricFilter } from './cloudwatch/LogMetricFilter';
import { LogResourcePolicy as CLOUDWATCH_LogResourcePolicy } from './cloudwatch/LogResourcePolicy';
import { LogStream as CLOUDWATCH_LogStream } from './cloudwatch/LogStream';
import { LogSubscriptionFilter as CLOUDWATCH_LogSubscriptionFilter } from './cloudwatch/LogSubscriptionFilter';
import { MetricAlarm as CLOUDWATCH_MetricAlarm } from './cloudwatch/MetricAlarm';
import { MetricStream as CLOUDWATCH_MetricStream } from './cloudwatch/MetricStream';
import { QueryDefinition as CLOUDWATCH_QueryDefinition } from './cloudwatch/QueryDefinition';
import { Domain as CODEARTIFACT_Domain } from './codeartifact/Domain';
import { DomainPermissions as CODEARTIFACT_DomainPermissions } from './codeartifact/DomainPermissions';
import { Repository as CODEARTIFACT_Repository } from './codeartifact/Repository';
import { RepositoryPermissionsPolicy as CODEARTIFACT_RepositoryPermissionsPolicy } from './codeartifact/RepositoryPermissionsPolicy';
import { Project as CODEBUILD_Project } from './codebuild/Project';
import { ReportGroup as CODEBUILD_ReportGroup } from './codebuild/ReportGroup';
import { ResourcePolicy as CODEBUILD_ResourcePolicy } from './codebuild/ResourcePolicy';
import { SourceCredential as CODEBUILD_SourceCredential } from './codebuild/SourceCredential';
import { Webhook as CODEBUILD_Webhook } from './codebuild/Webhook';
import { DevEnvironment as CODECATALYST_DevEnvironment } from './codecatalyst/DevEnvironment';
import { Project as CODECATALYST_Project } from './codecatalyst/Project';
import { SourceRepository as CODECATALYST_SourceRepository } from './codecatalyst/SourceRepository';
import { ApprovalRuleTemplate as CODECOMMIT_ApprovalRuleTemplate } from './codecommit/ApprovalRuleTemplate';
import { ApprovalRuleTemplateAssociation as CODECOMMIT_ApprovalRuleTemplateAssociation } from './codecommit/ApprovalRuleTemplateAssociation';
import { Repository as CODECOMMIT_Repository } from './codecommit/Repository';
import { Trigger as CODECOMMIT_Trigger } from './codecommit/Trigger';
import { Application as CODEDEPLOY_Application } from './codedeploy/Application';
import { DeploymentConfig as CODEDEPLOY_DeploymentConfig } from './codedeploy/DeploymentConfig';
import { DeploymentGroup as CODEDEPLOY_DeploymentGroup } from './codedeploy/DeploymentGroup';
import { ProfilingGroup as CODEGURUPROFILER_ProfilingGroup } from './codeguruprofiler/ProfilingGroup';
import { RepositoryAssociation as CODEGURUREVIEWER_RepositoryAssociation } from './codegurureviewer/RepositoryAssociation';
import { CustomActionType as CODEPIPELINE_CustomActionType } from './codepipeline/CustomActionType';
import { Pipeline as CODEPIPELINE_Pipeline } from './codepipeline/Pipeline';
import { Webhook as CODEPIPELINE_Webhook } from './codepipeline/Webhook';
import { Connection as CODESTARCONNECTIONS_Connection } from './codestarconnections/Connection';
import { Host as CODESTARCONNECTIONS_Host } from './codestarconnections/Host';
import { NotificationRule as CODESTARNOTIFICATIONS_NotificationRule } from './codestarnotifications/NotificationRule';
import { IdentityPool as COGNITO_IdentityPool } from './cognito/IdentityPool';
import { IdentityPoolProviderPrincipalTag as COGNITO_IdentityPoolProviderPrincipalTag } from './cognito/IdentityPoolProviderPrincipalTag';
import { IdentityPoolRoleAttachment as COGNITO_IdentityPoolRoleAttachment } from './cognito/IdentityPoolRoleAttachment';
import { IdentityProvider as COGNITO_IdentityProvider } from './cognito/IdentityProvider';
import { ManagedUserPoolClient as COGNITO_ManagedUserPoolClient } from './cognito/ManagedUserPoolClient';
import { ResourceServer as COGNITO_ResourceServer } from './cognito/ResourceServer';
import { RiskConfiguration as COGNITO_RiskConfiguration } from './cognito/RiskConfiguration';
import { User as COGNITO_User } from './cognito/User';
import { UserGroup as COGNITO_UserGroup } from './cognito/UserGroup';
import { UserInGroup as COGNITO_UserInGroup } from './cognito/UserInGroup';
import { UserPool as COGNITO_UserPool } from './cognito/UserPool';
import { UserPoolClient as COGNITO_UserPoolClient } from './cognito/UserPoolClient';
import { UserPoolDomain as COGNITO_UserPoolDomain } from './cognito/UserPoolDomain';
import { UserPoolUICustomization as COGNITO_UserPoolUICustomization } from './cognito/UserPoolUICustomization';
import { DocumentClassifier as COMPREHEND_DocumentClassifier } from './comprehend/DocumentClassifier';
import { EntityRecognizer as COMPREHEND_EntityRecognizer } from './comprehend/EntityRecognizer';
import { BotAssociation as CONNECT_BotAssociation } from './connect/BotAssociation';
import { ContactFlow as CONNECT_ContactFlow } from './connect/ContactFlow';
import { ContactFlowModule as CONNECT_ContactFlowModule } from './connect/ContactFlowModule';
import { HoursOfOperation as CONNECT_HoursOfOperation } from './connect/HoursOfOperation';
import { Instance as CONNECT_Instance } from './connect/Instance';
import { InstanceStorageConfig as CONNECT_InstanceStorageConfig } from './connect/InstanceStorageConfig';
import { LambdaFunctionAssociation as CONNECT_LambdaFunctionAssociation } from './connect/LambdaFunctionAssociation';
import { PhoneNumber as CONNECT_PhoneNumber } from './connect/PhoneNumber';
import { Queue as CONNECT_Queue } from './connect/Queue';
import { QuickConnect as CONNECT_QuickConnect } from './connect/QuickConnect';
import { RoutingProfile as CONNECT_RoutingProfile } from './connect/RoutingProfile';
import { SecurityProfile as CONNECT_SecurityProfile } from './connect/SecurityProfile';
import { User as CONNECT_User } from './connect/User';
import { UserHierarchyGroup as CONNECT_UserHierarchyGroup } from './connect/UserHierarchyGroup';
import { UserHierarchyStructure as CONNECT_UserHierarchyStructure } from './connect/UserHierarchyStructure';
import { Vocabulary as CONNECT_Vocabulary } from './connect/Vocabulary';
import { ControlTowerControl as CONTROLTOWER_ControlTowerControl } from './controltower/ControlTowerControl';
import { LandingZone as CONTROLTOWER_LandingZone } from './controltower/LandingZone';
import { AnomalyMonitor as COSTEXPLORER_AnomalyMonitor } from './costexplorer/AnomalyMonitor';
import { AnomalySubscription as COSTEXPLORER_AnomalySubscription } from './costexplorer/AnomalySubscription';
import { CostAllocationTag as COSTEXPLORER_CostAllocationTag } from './costexplorer/CostAllocationTag';
import { CostCategory as COSTEXPLORER_CostCategory } from './costexplorer/CostCategory';
import { ReportDefinition as CUR_ReportDefinition } from './cur/ReportDefinition';
import { Domain as CUSTOMERPROFILES_Domain } from './customerprofiles/Domain';
import { Profile as CUSTOMERPROFILES_Profile } from './customerprofiles/Profile';
import { DataSet as DATAEXCHANGE_DataSet } from './dataexchange/DataSet';
import { Revision as DATAEXCHANGE_Revision } from './dataexchange/Revision';
import { Pipeline as DATAPIPELINE_Pipeline } from './datapipeline/Pipeline';
import { PipelineDefinition as DATAPIPELINE_PipelineDefinition } from './datapipeline/PipelineDefinition';
import { Agent as DATASYNC_Agent } from './datasync/Agent';
import { EfsLocation as DATASYNC_EfsLocation } from './datasync/EfsLocation';
import { FsxOpenZfsFileSystem as DATASYNC_FsxOpenZfsFileSystem } from './datasync/FsxOpenZfsFileSystem';
import { LocationAzureBlob as DATASYNC_LocationAzureBlob } from './datasync/LocationAzureBlob';
import { LocationFsxLustre as DATASYNC_LocationFsxLustre } from './datasync/LocationFsxLustre';
import { LocationFsxOntapFileSystem as DATASYNC_LocationFsxOntapFileSystem } from './datasync/LocationFsxOntapFileSystem';
import { LocationFsxWindows as DATASYNC_LocationFsxWindows } from './datasync/LocationFsxWindows';
import { LocationHdfs as DATASYNC_LocationHdfs } from './datasync/LocationHdfs';
import { LocationObjectStorage as DATASYNC_LocationObjectStorage } from './datasync/LocationObjectStorage';
import { LocationSmb as DATASYNC_LocationSmb } from './datasync/LocationSmb';
import { NfsLocation as DATASYNC_NfsLocation } from './datasync/NfsLocation';
import { S3Location as DATASYNC_S3Location } from './datasync/S3Location';
import { Task as DATASYNC_Task } from './datasync/Task';
import { Cluster as DAX_Cluster } from './dax/Cluster';
import { ParameterGroup as DAX_ParameterGroup } from './dax/ParameterGroup';
import { SubnetGroup as DAX_SubnetGroup } from './dax/SubnetGroup';
import { Graph as DETECTIVE_Graph } from './detective/Graph';
import { InvitationAccepter as DETECTIVE_InvitationAccepter } from './detective/InvitationAccepter';
import { Member as DETECTIVE_Member } from './detective/Member';
import { OrganizationAdminAccount as DETECTIVE_OrganizationAdminAccount } from './detective/OrganizationAdminAccount';
import { OrganizationConfiguration as DETECTIVE_OrganizationConfiguration } from './detective/OrganizationConfiguration';
import { DevicePool as DEVICEFARM_DevicePool } from './devicefarm/DevicePool';
import { InstanceProfile as DEVICEFARM_InstanceProfile } from './devicefarm/InstanceProfile';
import { NetworkProfile as DEVICEFARM_NetworkProfile } from './devicefarm/NetworkProfile';
import { Project as DEVICEFARM_Project } from './devicefarm/Project';
import { TestGridProject as DEVICEFARM_TestGridProject } from './devicefarm/TestGridProject';
import { Upload as DEVICEFARM_Upload } from './devicefarm/Upload';
import { BgpPeer as DIRECTCONNECT_BgpPeer } from './directconnect/BgpPeer';
import { Connection as DIRECTCONNECT_Connection } from './directconnect/Connection';
import { ConnectionAssociation as DIRECTCONNECT_ConnectionAssociation } from './directconnect/ConnectionAssociation';
import { ConnectionConfirmation as DIRECTCONNECT_ConnectionConfirmation } from './directconnect/ConnectionConfirmation';
import { Gateway as DIRECTCONNECT_Gateway } from './directconnect/Gateway';
import { GatewayAssociation as DIRECTCONNECT_GatewayAssociation } from './directconnect/GatewayAssociation';
import { GatewayAssociationProposal as DIRECTCONNECT_GatewayAssociationProposal } from './directconnect/GatewayAssociationProposal';
import { HostedConnection as DIRECTCONNECT_HostedConnection } from './directconnect/HostedConnection';
import { HostedPrivateVirtualInterface as DIRECTCONNECT_HostedPrivateVirtualInterface } from './directconnect/HostedPrivateVirtualInterface';
import { HostedPrivateVirtualInterfaceAccepter as DIRECTCONNECT_HostedPrivateVirtualInterfaceAccepter } from './directconnect/HostedPrivateVirtualInterfaceAccepter';
import { HostedPublicVirtualInterface as DIRECTCONNECT_HostedPublicVirtualInterface } from './directconnect/HostedPublicVirtualInterface';
import { HostedPublicVirtualInterfaceAccepter as DIRECTCONNECT_HostedPublicVirtualInterfaceAccepter } from './directconnect/HostedPublicVirtualInterfaceAccepter';
import { HostedTransitVirtualInterface as DIRECTCONNECT_HostedTransitVirtualInterface } from './directconnect/HostedTransitVirtualInterface';
import { HostedTransitVirtualInterfaceAcceptor as DIRECTCONNECT_HostedTransitVirtualInterfaceAcceptor } from './directconnect/HostedTransitVirtualInterfaceAcceptor';
import { LinkAggregationGroup as DIRECTCONNECT_LinkAggregationGroup } from './directconnect/LinkAggregationGroup';
import { MacsecKeyAssociation as DIRECTCONNECT_MacsecKeyAssociation } from './directconnect/MacsecKeyAssociation';
import { PrivateVirtualInterface as DIRECTCONNECT_PrivateVirtualInterface } from './directconnect/PrivateVirtualInterface';
import { PublicVirtualInterface as DIRECTCONNECT_PublicVirtualInterface } from './directconnect/PublicVirtualInterface';
import { TransitVirtualInterface as DIRECTCONNECT_TransitVirtualInterface } from './directconnect/TransitVirtualInterface';
import { ConditionalForwader as DIRECTORYSERVICE_ConditionalForwader } from './directoryservice/ConditionalForwader';
import { Directory as DIRECTORYSERVICE_Directory } from './directoryservice/Directory';
import { LogService as DIRECTORYSERVICE_LogService } from './directoryservice/LogService';
import { RadiusSettings as DIRECTORYSERVICE_RadiusSettings } from './directoryservice/RadiusSettings';
import { ServiceRegion as DIRECTORYSERVICE_ServiceRegion } from './directoryservice/ServiceRegion';
import { SharedDirectory as DIRECTORYSERVICE_SharedDirectory } from './directoryservice/SharedDirectory';
import { SharedDirectoryAccepter as DIRECTORYSERVICE_SharedDirectoryAccepter } from './directoryservice/SharedDirectoryAccepter';
import { Trust as DIRECTORYSERVICE_Trust } from './directoryservice/Trust';
import { LifecyclePolicy as DLM_LifecyclePolicy } from './dlm/LifecyclePolicy';
import { Certificate as DMS_Certificate } from './dms/Certificate';
import { Endpoint as DMS_Endpoint } from './dms/Endpoint';
import { EventSubscription as DMS_EventSubscription } from './dms/EventSubscription';
import { ReplicationConfig as DMS_ReplicationConfig } from './dms/ReplicationConfig';
import { ReplicationInstance as DMS_ReplicationInstance } from './dms/ReplicationInstance';
import { ReplicationSubnetGroup as DMS_ReplicationSubnetGroup } from './dms/ReplicationSubnetGroup';
import { ReplicationTask as DMS_ReplicationTask } from './dms/ReplicationTask';
import { S3Endpoint as DMS_S3Endpoint } from './dms/S3Endpoint';
import { Cluster as DOCDB_Cluster } from './docdb/Cluster';
import { ClusterInstance as DOCDB_ClusterInstance } from './docdb/ClusterInstance';
import { ClusterParameterGroup as DOCDB_ClusterParameterGroup } from './docdb/ClusterParameterGroup';
import { ClusterSnapshot as DOCDB_ClusterSnapshot } from './docdb/ClusterSnapshot';
import { ElasticCluster as DOCDB_ElasticCluster } from './docdb/ElasticCluster';
import { EventSubscription as DOCDB_EventSubscription } from './docdb/EventSubscription';
import { GlobalCluster as DOCDB_GlobalCluster } from './docdb/GlobalCluster';
import { SubnetGroup as DOCDB_SubnetGroup } from './docdb/SubnetGroup';
import { ContributorInsights as DYNAMODB_ContributorInsights } from './dynamodb/ContributorInsights';
import { GlobalTable as DYNAMODB_GlobalTable } from './dynamodb/GlobalTable';
import { KinesisStreamingDestination as DYNAMODB_KinesisStreamingDestination } from './dynamodb/KinesisStreamingDestination';
import { Table as DYNAMODB_Table } from './dynamodb/Table';
import { TableItem as DYNAMODB_TableItem } from './dynamodb/TableItem';
import { TableReplica as DYNAMODB_TableReplica } from './dynamodb/TableReplica';
import { Tag as DYNAMODB_Tag } from './dynamodb/Tag';
import { DefaultKmsKey as EBS_DefaultKmsKey } from './ebs/DefaultKmsKey';
import { EncryptionByDefault as EBS_EncryptionByDefault } from './ebs/EncryptionByDefault';
import { FastSnapshotRestore as EBS_FastSnapshotRestore } from './ebs/FastSnapshotRestore';
import { Snapshot as EBS_Snapshot } from './ebs/Snapshot';
import { SnapshotCopy as EBS_SnapshotCopy } from './ebs/SnapshotCopy';
import { SnapshotImport as EBS_SnapshotImport } from './ebs/SnapshotImport';
import { Volume as EBS_Volume } from './ebs/Volume';
import { Ami as EC2_Ami } from './ec2/Ami';
import { AmiCopy as EC2_AmiCopy } from './ec2/AmiCopy';
import { AmiFromInstance as EC2_AmiFromInstance } from './ec2/AmiFromInstance';
import { AmiLaunchPermission as EC2_AmiLaunchPermission } from './ec2/AmiLaunchPermission';
import { AvailabilityZoneGroup as EC2_AvailabilityZoneGroup } from './ec2/AvailabilityZoneGroup';
import { CapacityReservation as EC2_CapacityReservation } from './ec2/CapacityReservation';
import { CarrierGateway as EC2_CarrierGateway } from './ec2/CarrierGateway';
import { CustomerGateway as EC2_CustomerGateway } from './ec2/CustomerGateway';
import { DedicatedHost as EC2_DedicatedHost } from './ec2/DedicatedHost';
import { DefaultNetworkAcl as EC2_DefaultNetworkAcl } from './ec2/DefaultNetworkAcl';
import { DefaultRouteTable as EC2_DefaultRouteTable } from './ec2/DefaultRouteTable';
import { DefaultSecurityGroup as EC2_DefaultSecurityGroup } from './ec2/DefaultSecurityGroup';
import { DefaultSubnet as EC2_DefaultSubnet } from './ec2/DefaultSubnet';
import { DefaultVpc as EC2_DefaultVpc } from './ec2/DefaultVpc';
import { DefaultVpcDhcpOptions as EC2_DefaultVpcDhcpOptions } from './ec2/DefaultVpcDhcpOptions';
import { EgressOnlyInternetGateway as EC2_EgressOnlyInternetGateway } from './ec2/EgressOnlyInternetGateway';
import { Eip as EC2_Eip } from './ec2/Eip';
import { EipAssociation as EC2_EipAssociation } from './ec2/EipAssociation';
import { Fleet as EC2_Fleet } from './ec2/Fleet';
import { FlowLog as EC2_FlowLog } from './ec2/FlowLog';
import { ImageBlockPublicAccess as EC2_ImageBlockPublicAccess } from './ec2/ImageBlockPublicAccess';
import { Instance as EC2_Instance } from './ec2/Instance';
import { InternetGateway as EC2_InternetGateway } from './ec2/InternetGateway';
import { InternetGatewayAttachment as EC2_InternetGatewayAttachment } from './ec2/InternetGatewayAttachment';
import { KeyPair as EC2_KeyPair } from './ec2/KeyPair';
import { LaunchConfiguration as EC2_LaunchConfiguration } from './ec2/LaunchConfiguration';
import { LaunchTemplate as EC2_LaunchTemplate } from './ec2/LaunchTemplate';
import { LocalGatewayRoute as EC2_LocalGatewayRoute } from './ec2/LocalGatewayRoute';
import { LocalGatewayRouteTableVpcAssociation as EC2_LocalGatewayRouteTableVpcAssociation } from './ec2/LocalGatewayRouteTableVpcAssociation';
import { MainRouteTableAssociation as EC2_MainRouteTableAssociation } from './ec2/MainRouteTableAssociation';
import { ManagedPrefixList as EC2_ManagedPrefixList } from './ec2/ManagedPrefixList';
import { ManagedPrefixListEntry as EC2_ManagedPrefixListEntry } from './ec2/ManagedPrefixListEntry';
import { NatGateway as EC2_NatGateway } from './ec2/NatGateway';
import { NetworkAcl as EC2_NetworkAcl } from './ec2/NetworkAcl';
import { NetworkAclAssociation as EC2_NetworkAclAssociation } from './ec2/NetworkAclAssociation';
import { NetworkAclRule as EC2_NetworkAclRule } from './ec2/NetworkAclRule';
import { NetworkInsightsAnalysis as EC2_NetworkInsightsAnalysis } from './ec2/NetworkInsightsAnalysis';
import { NetworkInsightsPath as EC2_NetworkInsightsPath } from './ec2/NetworkInsightsPath';
import { NetworkInterface as EC2_NetworkInterface } from './ec2/NetworkInterface';
import { NetworkInterfaceAttachment as EC2_NetworkInterfaceAttachment } from './ec2/NetworkInterfaceAttachment';
import { NetworkInterfaceSecurityGroupAttachment as EC2_NetworkInterfaceSecurityGroupAttachment } from './ec2/NetworkInterfaceSecurityGroupAttachment';
import { PeeringConnectionOptions as EC2_PeeringConnectionOptions } from './ec2/PeeringConnectionOptions';
import { PlacementGroup as EC2_PlacementGroup } from './ec2/PlacementGroup';
import { ProxyProtocolPolicy as EC2_ProxyProtocolPolicy } from './ec2/ProxyProtocolPolicy';
import { Route as EC2_Route } from './ec2/Route';
import { RouteTable as EC2_RouteTable } from './ec2/RouteTable';
import { RouteTableAssociation as EC2_RouteTableAssociation } from './ec2/RouteTableAssociation';
import { SecurityGroup as EC2_SecurityGroup } from './ec2/SecurityGroup';
import { SecurityGroupAssociation as EC2_SecurityGroupAssociation } from './ec2/SecurityGroupAssociation';
import { SecurityGroupRule as EC2_SecurityGroupRule } from './ec2/SecurityGroupRule';
import { SerialConsoleAccess as EC2_SerialConsoleAccess } from './ec2/SerialConsoleAccess';
import { SnapshotCreateVolumePermission as EC2_SnapshotCreateVolumePermission } from './ec2/SnapshotCreateVolumePermission';
import { SpotDatafeedSubscription as EC2_SpotDatafeedSubscription } from './ec2/SpotDatafeedSubscription';
import { SpotFleetRequest as EC2_SpotFleetRequest } from './ec2/SpotFleetRequest';
import { SpotInstanceRequest as EC2_SpotInstanceRequest } from './ec2/SpotInstanceRequest';
import { Subnet as EC2_Subnet } from './ec2/Subnet';
import { SubnetCidrReservation as EC2_SubnetCidrReservation } from './ec2/SubnetCidrReservation';
import { Tag as EC2_Tag } from './ec2/Tag';
import { TrafficMirrorFilter as EC2_TrafficMirrorFilter } from './ec2/TrafficMirrorFilter';
import { TrafficMirrorFilterRule as EC2_TrafficMirrorFilterRule } from './ec2/TrafficMirrorFilterRule';
import { TrafficMirrorSession as EC2_TrafficMirrorSession } from './ec2/TrafficMirrorSession';
import { TrafficMirrorTarget as EC2_TrafficMirrorTarget } from './ec2/TrafficMirrorTarget';
import { VolumeAttachment as EC2_VolumeAttachment } from './ec2/VolumeAttachment';
import { Vpc as EC2_Vpc } from './ec2/Vpc';
import { VpcDhcpOptions as EC2_VpcDhcpOptions } from './ec2/VpcDhcpOptions';
import { VpcDhcpOptionsAssociation as EC2_VpcDhcpOptionsAssociation } from './ec2/VpcDhcpOptionsAssociation';
import { VpcEndpoint as EC2_VpcEndpoint } from './ec2/VpcEndpoint';
import { VpcEndpointConnectionAccepter as EC2_VpcEndpointConnectionAccepter } from './ec2/VpcEndpointConnectionAccepter';
import { VpcEndpointConnectionNotification as EC2_VpcEndpointConnectionNotification } from './ec2/VpcEndpointConnectionNotification';
import { VpcEndpointPolicy as EC2_VpcEndpointPolicy } from './ec2/VpcEndpointPolicy';
import { VpcEndpointRouteTableAssociation as EC2_VpcEndpointRouteTableAssociation } from './ec2/VpcEndpointRouteTableAssociation';
import { VpcEndpointService as EC2_VpcEndpointService } from './ec2/VpcEndpointService';
import { VpcEndpointServiceAllowedPrinciple as EC2_VpcEndpointServiceAllowedPrinciple } from './ec2/VpcEndpointServiceAllowedPrinciple';
import { VpcEndpointSubnetAssociation as EC2_VpcEndpointSubnetAssociation } from './ec2/VpcEndpointSubnetAssociation';
import { VpcIpam as EC2_VpcIpam } from './ec2/VpcIpam';
import { VpcIpamOrganizationAdminAccount as EC2_VpcIpamOrganizationAdminAccount } from './ec2/VpcIpamOrganizationAdminAccount';
import { VpcIpamPool as EC2_VpcIpamPool } from './ec2/VpcIpamPool';
import { VpcIpamPoolCidr as EC2_VpcIpamPoolCidr } from './ec2/VpcIpamPoolCidr';
import { VpcIpamPoolCidrAllocation as EC2_VpcIpamPoolCidrAllocation } from './ec2/VpcIpamPoolCidrAllocation';
import { VpcIpamPreviewNextCidr as EC2_VpcIpamPreviewNextCidr } from './ec2/VpcIpamPreviewNextCidr';
import { VpcIpamResourceDiscovery as EC2_VpcIpamResourceDiscovery } from './ec2/VpcIpamResourceDiscovery';
import { VpcIpamResourceDiscoveryAssociation as EC2_VpcIpamResourceDiscoveryAssociation } from './ec2/VpcIpamResourceDiscoveryAssociation';
import { VpcIpamScope as EC2_VpcIpamScope } from './ec2/VpcIpamScope';
import { VpcIpv4CidrBlockAssociation as EC2_VpcIpv4CidrBlockAssociation } from './ec2/VpcIpv4CidrBlockAssociation';
import { VpcIpv6CidrBlockAssociation as EC2_VpcIpv6CidrBlockAssociation } from './ec2/VpcIpv6CidrBlockAssociation';
import { VpcNetworkPerformanceMetricSubscription as EC2_VpcNetworkPerformanceMetricSubscription } from './ec2/VpcNetworkPerformanceMetricSubscription';
import { VpcPeeringConnection as EC2_VpcPeeringConnection } from './ec2/VpcPeeringConnection';
import { VpcPeeringConnectionAccepter as EC2_VpcPeeringConnectionAccepter } from './ec2/VpcPeeringConnectionAccepter';
import { VpnConnection as EC2_VpnConnection } from './ec2/VpnConnection';
import { VpnConnectionRoute as EC2_VpnConnectionRoute } from './ec2/VpnConnectionRoute';
import { VpnGateway as EC2_VpnGateway } from './ec2/VpnGateway';
import { VpnGatewayAttachment as EC2_VpnGatewayAttachment } from './ec2/VpnGatewayAttachment';
import { VpnGatewayRoutePropagation as EC2_VpnGatewayRoutePropagation } from './ec2/VpnGatewayRoutePropagation';
import { AuthorizationRule as EC2CLIENTVPN_AuthorizationRule } from './ec2clientvpn/AuthorizationRule';
import { Endpoint as EC2CLIENTVPN_Endpoint } from './ec2clientvpn/Endpoint';
import { NetworkAssociation as EC2CLIENTVPN_NetworkAssociation } from './ec2clientvpn/NetworkAssociation';
import { Route as EC2CLIENTVPN_Route } from './ec2clientvpn/Route';
import { Connect as EC2TRANSITGATEWAY_Connect } from './ec2transitgateway/Connect';
import { ConnectPeer as EC2TRANSITGATEWAY_ConnectPeer } from './ec2transitgateway/ConnectPeer';
import { InstanceConnectEndpoint as EC2TRANSITGATEWAY_InstanceConnectEndpoint } from './ec2transitgateway/InstanceConnectEndpoint';
import { InstanceState as EC2TRANSITGATEWAY_InstanceState } from './ec2transitgateway/InstanceState';
import { MulticastDomain as EC2TRANSITGATEWAY_MulticastDomain } from './ec2transitgateway/MulticastDomain';
import { MulticastDomainAssociation as EC2TRANSITGATEWAY_MulticastDomainAssociation } from './ec2transitgateway/MulticastDomainAssociation';
import { MulticastGroupMember as EC2TRANSITGATEWAY_MulticastGroupMember } from './ec2transitgateway/MulticastGroupMember';
import { MulticastGroupSource as EC2TRANSITGATEWAY_MulticastGroupSource } from './ec2transitgateway/MulticastGroupSource';
import { PeeringAttachment as EC2TRANSITGATEWAY_PeeringAttachment } from './ec2transitgateway/PeeringAttachment';
import { PeeringAttachmentAccepter as EC2TRANSITGATEWAY_PeeringAttachmentAccepter } from './ec2transitgateway/PeeringAttachmentAccepter';
import { PolicyTable as EC2TRANSITGATEWAY_PolicyTable } from './ec2transitgateway/PolicyTable';
import { PolicyTableAssociation as EC2TRANSITGATEWAY_PolicyTableAssociation } from './ec2transitgateway/PolicyTableAssociation';
import { PrefixListReference as EC2TRANSITGATEWAY_PrefixListReference } from './ec2transitgateway/PrefixListReference';
import { Route as EC2TRANSITGATEWAY_Route } from './ec2transitgateway/Route';
import { RouteTable as EC2TRANSITGATEWAY_RouteTable } from './ec2transitgateway/RouteTable';
import { RouteTableAssociation as EC2TRANSITGATEWAY_RouteTableAssociation } from './ec2transitgateway/RouteTableAssociation';
import { RouteTablePropagation as EC2TRANSITGATEWAY_RouteTablePropagation } from './ec2transitgateway/RouteTablePropagation';
import { TransitGateway as EC2TRANSITGATEWAY_TransitGateway } from './ec2transitgateway/TransitGateway';
import { VpcAttachment as EC2TRANSITGATEWAY_VpcAttachment } from './ec2transitgateway/VpcAttachment';
import { VpcAttachmentAccepter as EC2TRANSITGATEWAY_VpcAttachmentAccepter } from './ec2transitgateway/VpcAttachmentAccepter';
import { LifecyclePolicy as ECR_LifecyclePolicy } from './ecr/LifecyclePolicy';
import { PullThroughCacheRule as ECR_PullThroughCacheRule } from './ecr/PullThroughCacheRule';
import { RegistryPolicy as ECR_RegistryPolicy } from './ecr/RegistryPolicy';
import { RegistryScanningConfiguration as ECR_RegistryScanningConfiguration } from './ecr/RegistryScanningConfiguration';
import { ReplicationConfiguration as ECR_ReplicationConfiguration } from './ecr/ReplicationConfiguration';
import { Repository as ECR_Repository } from './ecr/Repository';
import { RepositoryPolicy as ECR_RepositoryPolicy } from './ecr/RepositoryPolicy';
import { Repository as ECRPUBLIC_Repository } from './ecrpublic/Repository';
import { RepositoryPolicy as ECRPUBLIC_RepositoryPolicy } from './ecrpublic/RepositoryPolicy';
import { AccountSettingDefault as ECS_AccountSettingDefault } from './ecs/AccountSettingDefault';
import { CapacityProvider as ECS_CapacityProvider } from './ecs/CapacityProvider';
import { Cluster as ECS_Cluster } from './ecs/Cluster';
import { ClusterCapacityProviders as ECS_ClusterCapacityProviders } from './ecs/ClusterCapacityProviders';
import { Service as ECS_Service } from './ecs/Service';
import { Tag as ECS_Tag } from './ecs/Tag';
import { TaskDefinition as ECS_TaskDefinition } from './ecs/TaskDefinition';
import { TaskSet as ECS_TaskSet } from './ecs/TaskSet';
import { AccessPoint as EFS_AccessPoint } from './efs/AccessPoint';
import { BackupPolicy as EFS_BackupPolicy } from './efs/BackupPolicy';
import { FileSystem as EFS_FileSystem } from './efs/FileSystem';
import { FileSystemPolicy as EFS_FileSystemPolicy } from './efs/FileSystemPolicy';
import { MountTarget as EFS_MountTarget } from './efs/MountTarget';
import { ReplicationConfiguration as EFS_ReplicationConfiguration } from './efs/ReplicationConfiguration';
import { AccessEntry as EKS_AccessEntry } from './eks/AccessEntry';
import { AccessPolicyAssociation as EKS_AccessPolicyAssociation } from './eks/AccessPolicyAssociation';
import { Addon as EKS_Addon } from './eks/Addon';
import { Cluster as EKS_Cluster } from './eks/Cluster';
import { FargateProfile as EKS_FargateProfile } from './eks/FargateProfile';
import { IdentityProviderConfig as EKS_IdentityProviderConfig } from './eks/IdentityProviderConfig';
import { NodeGroup as EKS_NodeGroup } from './eks/NodeGroup';
import { PodIdentityAssociation as EKS_PodIdentityAssociation } from './eks/PodIdentityAssociation';
import { Cluster as ELASTICACHE_Cluster } from './elasticache/Cluster';
import { GlobalReplicationGroup as ELASTICACHE_GlobalReplicationGroup } from './elasticache/GlobalReplicationGroup';
import { ParameterGroup as ELASTICACHE_ParameterGroup } from './elasticache/ParameterGroup';
import { ReplicationGroup as ELASTICACHE_ReplicationGroup } from './elasticache/ReplicationGroup';
import { ServerlessCache as ELASTICACHE_ServerlessCache } from './elasticache/ServerlessCache';
import { SubnetGroup as ELASTICACHE_SubnetGroup } from './elasticache/SubnetGroup';
import { User as ELASTICACHE_User } from './elasticache/User';
import { UserGroup as ELASTICACHE_UserGroup } from './elasticache/UserGroup';
import { UserGroupAssociation as ELASTICACHE_UserGroupAssociation } from './elasticache/UserGroupAssociation';
import { Application as ELASTICBEANSTALK_Application } from './elasticbeanstalk/Application';
import { ApplicationVersion as ELASTICBEANSTALK_ApplicationVersion } from './elasticbeanstalk/ApplicationVersion';
import { ConfigurationTemplate as ELASTICBEANSTALK_ConfigurationTemplate } from './elasticbeanstalk/ConfigurationTemplate';
import { Environment as ELASTICBEANSTALK_Environment } from './elasticbeanstalk/Environment';
import { Domain as ELASTICSEARCH_Domain } from './elasticsearch/Domain';
import { DomainPolicy as ELASTICSEARCH_DomainPolicy } from './elasticsearch/DomainPolicy';
import { DomainSamlOptions as ELASTICSEARCH_DomainSamlOptions } from './elasticsearch/DomainSamlOptions';
import { VpcEndpoint as ELASTICSEARCH_VpcEndpoint } from './elasticsearch/VpcEndpoint';
import { Pipeline as ELASTICTRANSCODER_Pipeline } from './elastictranscoder/Pipeline';
import { Preset as ELASTICTRANSCODER_Preset } from './elastictranscoder/Preset';
import { AppCookieStickinessPolicy as ELB_AppCookieStickinessPolicy } from './elb/AppCookieStickinessPolicy';
import { Attachment as ELB_Attachment } from './elb/Attachment';
import { ListenerPolicy as ELB_ListenerPolicy } from './elb/ListenerPolicy';
import { LoadBalancer as ELB_LoadBalancer } from './elb/LoadBalancer';
import { LoadBalancerBackendServerPolicy as ELB_LoadBalancerBackendServerPolicy } from './elb/LoadBalancerBackendServerPolicy';
import { LoadBalancerCookieStickinessPolicy as ELB_LoadBalancerCookieStickinessPolicy } from './elb/LoadBalancerCookieStickinessPolicy';
import { LoadBalancerPolicy as ELB_LoadBalancerPolicy } from './elb/LoadBalancerPolicy';
import { SslNegotiationPolicy as ELB_SslNegotiationPolicy } from './elb/SslNegotiationPolicy';
import { BlockPublicAccessConfiguration as EMR_BlockPublicAccessConfiguration } from './emr/BlockPublicAccessConfiguration';
import { Cluster as EMR_Cluster } from './emr/Cluster';
import { InstanceFleet as EMR_InstanceFleet } from './emr/InstanceFleet';
import { InstanceGroup as EMR_InstanceGroup } from './emr/InstanceGroup';
import { ManagedScalingPolicy as EMR_ManagedScalingPolicy } from './emr/ManagedScalingPolicy';
import { SecurityConfiguration as EMR_SecurityConfiguration } from './emr/SecurityConfiguration';
import { Studio as EMR_Studio } from './emr/Studio';
import { StudioSessionMapping as EMR_StudioSessionMapping } from './emr/StudioSessionMapping';
import { JobTemplate as EMRCONTAINERS_JobTemplate } from './emrcontainers/JobTemplate';
import { VirtualCluster as EMRCONTAINERS_VirtualCluster } from './emrcontainers/VirtualCluster';
import { Application as EMRSERVERLESS_Application } from './emrserverless/Application';
import { Feature as EVIDENTLY_Feature } from './evidently/Feature';
import { Launch as EVIDENTLY_Launch } from './evidently/Launch';
import { Project as EVIDENTLY_Project } from './evidently/Project';
import { Segment as EVIDENTLY_Segment } from './evidently/Segment';
import { KxCluster as FINSPACE_KxCluster } from './finspace/KxCluster';
import { KxDatabase as FINSPACE_KxDatabase } from './finspace/KxDatabase';
import { KxDataview as FINSPACE_KxDataview } from './finspace/KxDataview';
import { KxEnvironment as FINSPACE_KxEnvironment } from './finspace/KxEnvironment';
import { KxScalingGroup as FINSPACE_KxScalingGroup } from './finspace/KxScalingGroup';
import { KxUser as FINSPACE_KxUser } from './finspace/KxUser';
import { KxVolume as FINSPACE_KxVolume } from './finspace/KxVolume';
import { ExperimentTemplate as FIS_ExperimentTemplate } from './fis/ExperimentTemplate';
import { AdminAccount as FMS_AdminAccount } from './fms/AdminAccount';
import { Policy as FMS_Policy } from './fms/Policy';
import { Backup as FSX_Backup } from './fsx/Backup';
import { DataRepositoryAssociation as FSX_DataRepositoryAssociation } from './fsx/DataRepositoryAssociation';
import { FileCache as FSX_FileCache } from './fsx/FileCache';
import { LustreFileSystem as FSX_LustreFileSystem } from './fsx/LustreFileSystem';
import { OntapFileSystem as FSX_OntapFileSystem } from './fsx/OntapFileSystem';
import { OntapStorageVirtualMachine as FSX_OntapStorageVirtualMachine } from './fsx/OntapStorageVirtualMachine';
import { OntapVolume as FSX_OntapVolume } from './fsx/OntapVolume';
import { OpenZfsFileSystem as FSX_OpenZfsFileSystem } from './fsx/OpenZfsFileSystem';
import { OpenZfsSnapshot as FSX_OpenZfsSnapshot } from './fsx/OpenZfsSnapshot';
import { OpenZfsVolume as FSX_OpenZfsVolume } from './fsx/OpenZfsVolume';
import { WindowsFileSystem as FSX_WindowsFileSystem } from './fsx/WindowsFileSystem';
import { Alias as GAMELIFT_Alias } from './gamelift/Alias';
import { Build as GAMELIFT_Build } from './gamelift/Build';
import { Fleet as GAMELIFT_Fleet } from './gamelift/Fleet';
import { GameServerGroup as GAMELIFT_GameServerGroup } from './gamelift/GameServerGroup';
import { GameSessionQueue as GAMELIFT_GameSessionQueue } from './gamelift/GameSessionQueue';
import { MatchmakingConfiguration as GAMELIFT_MatchmakingConfiguration } from './gamelift/MatchmakingConfiguration';
import { MatchmakingRuleSet as GAMELIFT_MatchmakingRuleSet } from './gamelift/MatchmakingRuleSet';
import { Script as GAMELIFT_Script } from './gamelift/Script';
import { Vault as GLACIER_Vault } from './glacier/Vault';
import { VaultLock as GLACIER_VaultLock } from './glacier/VaultLock';
import { Accelerator as GLOBALACCELERATOR_Accelerator } from './globalaccelerator/Accelerator';
import { CustomRoutingAccelerator as GLOBALACCELERATOR_CustomRoutingAccelerator } from './globalaccelerator/CustomRoutingAccelerator';
import { CustomRoutingEndpointGroup as GLOBALACCELERATOR_CustomRoutingEndpointGroup } from './globalaccelerator/CustomRoutingEndpointGroup';
import { CustomRoutingListener as GLOBALACCELERATOR_CustomRoutingListener } from './globalaccelerator/CustomRoutingListener';
import { EndpointGroup as GLOBALACCELERATOR_EndpointGroup } from './globalaccelerator/EndpointGroup';
import { Listener as GLOBALACCELERATOR_Listener } from './globalaccelerator/Listener';
import { CatalogDatabase as GLUE_CatalogDatabase } from './glue/CatalogDatabase';
import { CatalogTable as GLUE_CatalogTable } from './glue/CatalogTable';
import { Classifier as GLUE_Classifier } from './glue/Classifier';
import { Connection as GLUE_Connection } from './glue/Connection';
import { Crawler as GLUE_Crawler } from './glue/Crawler';
import { DataCatalogEncryptionSettings as GLUE_DataCatalogEncryptionSettings } from './glue/DataCatalogEncryptionSettings';
import { DataQualityRuleset as GLUE_DataQualityRuleset } from './glue/DataQualityRuleset';
import { DevEndpoint as GLUE_DevEndpoint } from './glue/DevEndpoint';
import { Job as GLUE_Job } from './glue/Job';
import { MLTransform as GLUE_MLTransform } from './glue/MLTransform';
import { Partition as GLUE_Partition } from './glue/Partition';
import { PartitionIndex as GLUE_PartitionIndex } from './glue/PartitionIndex';
import { Registry as GLUE_Registry } from './glue/Registry';
import { ResourcePolicy as GLUE_ResourcePolicy } from './glue/ResourcePolicy';
import { Schema as GLUE_Schema } from './glue/Schema';
import { SecurityConfiguration as GLUE_SecurityConfiguration } from './glue/SecurityConfiguration';
import { Trigger as GLUE_Trigger } from './glue/Trigger';
import { UserDefinedFunction as GLUE_UserDefinedFunction } from './glue/UserDefinedFunction';
import { Workflow as GLUE_Workflow } from './glue/Workflow';
import { LicenseAssociation as GRAFANA_LicenseAssociation } from './grafana/LicenseAssociation';
import { RoleAssociation as GRAFANA_RoleAssociation } from './grafana/RoleAssociation';
import { Workspace as GRAFANA_Workspace } from './grafana/Workspace';
import { WorkspaceApiKey as GRAFANA_WorkspaceApiKey } from './grafana/WorkspaceApiKey';
import { WorkspaceSamlConfiguration as GRAFANA_WorkspaceSamlConfiguration } from './grafana/WorkspaceSamlConfiguration';
import { Detector as GUARDDUTY_Detector } from './guardduty/Detector';
import { DetectorFeature as GUARDDUTY_DetectorFeature } from './guardduty/DetectorFeature';
import { Filter as GUARDDUTY_Filter } from './guardduty/Filter';
import { InviteAccepter as GUARDDUTY_InviteAccepter } from './guardduty/InviteAccepter';
import { IPSet as GUARDDUTY_IPSet } from './guardduty/IPSet';
import { Member as GUARDDUTY_Member } from './guardduty/Member';
import { OrganizationAdminAccount as GUARDDUTY_OrganizationAdminAccount } from './guardduty/OrganizationAdminAccount';
import { OrganizationConfiguration as GUARDDUTY_OrganizationConfiguration } from './guardduty/OrganizationConfiguration';
import { OrganizationConfigurationFeature as GUARDDUTY_OrganizationConfigurationFeature } from './guardduty/OrganizationConfigurationFeature';
import { PublishingDestination as GUARDDUTY_PublishingDestination } from './guardduty/PublishingDestination';
import { ThreatIntelSet as GUARDDUTY_ThreatIntelSet } from './guardduty/ThreatIntelSet';
import { AccessKey as IAM_AccessKey } from './iam/AccessKey';
import { AccountAlias as IAM_AccountAlias } from './iam/AccountAlias';
import { AccountPasswordPolicy as IAM_AccountPasswordPolicy } from './iam/AccountPasswordPolicy';
import { Group as IAM_Group } from './iam/Group';
import { GroupMembership as IAM_GroupMembership } from './iam/GroupMembership';
import { GroupPolicy as IAM_GroupPolicy } from './iam/GroupPolicy';
import { GroupPolicyAttachment as IAM_GroupPolicyAttachment } from './iam/GroupPolicyAttachment';
import { InstanceProfile as IAM_InstanceProfile } from './iam/InstanceProfile';
import { OpenIdConnectProvider as IAM_OpenIdConnectProvider } from './iam/OpenIdConnectProvider';
import { Policy as IAM_Policy } from './iam/Policy';
import { PolicyAttachment as IAM_PolicyAttachment } from './iam/PolicyAttachment';
import { Role as IAM_Role } from './iam/Role';
import { RolePolicy as IAM_RolePolicy } from './iam/RolePolicy';
import { RolePolicyAttachment as IAM_RolePolicyAttachment } from './iam/RolePolicyAttachment';
import { SamlProvider as IAM_SamlProvider } from './iam/SamlProvider';
import { SecurityTokenServicePreferences as IAM_SecurityTokenServicePreferences } from './iam/SecurityTokenServicePreferences';
import { ServerCertificate as IAM_ServerCertificate } from './iam/ServerCertificate';
import { ServiceLinkedRole as IAM_ServiceLinkedRole } from './iam/ServiceLinkedRole';
import { ServiceSpecificCredential as IAM_ServiceSpecificCredential } from './iam/ServiceSpecificCredential';
import { SigningCertificate as IAM_SigningCertificate } from './iam/SigningCertificate';
import { SshKey as IAM_SshKey } from './iam/SshKey';
import { User as IAM_User } from './iam/User';
import { UserGroupMembership as IAM_UserGroupMembership } from './iam/UserGroupMembership';
import { UserLoginProfile as IAM_UserLoginProfile } from './iam/UserLoginProfile';
import { UserPolicy as IAM_UserPolicy } from './iam/UserPolicy';
import { UserPolicyAttachment as IAM_UserPolicyAttachment } from './iam/UserPolicyAttachment';
import { VirtualMfaDevice as IAM_VirtualMfaDevice } from './iam/VirtualMfaDevice';
import { Group as IDENTITYSTORE_Group } from './identitystore/Group';
import { GroupMembership as IDENTITYSTORE_GroupMembership } from './identitystore/GroupMembership';
import { User as IDENTITYSTORE_User } from './identitystore/User';
import { Component as IMAGEBUILDER_Component } from './imagebuilder/Component';
import { ContainerRecipe as IMAGEBUILDER_ContainerRecipe } from './imagebuilder/ContainerRecipe';
import { DistributionConfiguration as IMAGEBUILDER_DistributionConfiguration } from './imagebuilder/DistributionConfiguration';
import { Image as IMAGEBUILDER_Image } from './imagebuilder/Image';
import { ImagePipeline as IMAGEBUILDER_ImagePipeline } from './imagebuilder/ImagePipeline';
import { ImageRecipe as IMAGEBUILDER_ImageRecipe } from './imagebuilder/ImageRecipe';
import { InfrastructureConfiguration as IMAGEBUILDER_InfrastructureConfiguration } from './imagebuilder/InfrastructureConfiguration';
import { Workflow as IMAGEBUILDER_Workflow } from './imagebuilder/Workflow';
import { AssessmentTarget as INSPECTOR_AssessmentTarget } from './inspector/AssessmentTarget';
import { AssessmentTemplate as INSPECTOR_AssessmentTemplate } from './inspector/AssessmentTemplate';
import { ResourceGroup as INSPECTOR_ResourceGroup } from './inspector/ResourceGroup';
import { DelegatedAdminAccount as INSPECTOR2_DelegatedAdminAccount } from './inspector2/DelegatedAdminAccount';
import { Enabler as INSPECTOR2_Enabler } from './inspector2/Enabler';
import { MemberAssociation as INSPECTOR2_MemberAssociation } from './inspector2/MemberAssociation';
import { OrganizationConfiguration as INSPECTOR2_OrganizationConfiguration } from './inspector2/OrganizationConfiguration';
import { Authorizer as IOT_Authorizer } from './iot/Authorizer';
import { BillingGroup as IOT_BillingGroup } from './iot/BillingGroup';
import { CaCertificate as IOT_CaCertificate } from './iot/CaCertificate';
import { Certificate as IOT_Certificate } from './iot/Certificate';
import { DomainConfiguration as IOT_DomainConfiguration } from './iot/DomainConfiguration';
import { EventConfigurations as IOT_EventConfigurations } from './iot/EventConfigurations';
import { IndexingConfiguration as IOT_IndexingConfiguration } from './iot/IndexingConfiguration';
import { LoggingOptions as IOT_LoggingOptions } from './iot/LoggingOptions';
import { Policy as IOT_Policy } from './iot/Policy';
import { PolicyAttachment as IOT_PolicyAttachment } from './iot/PolicyAttachment';
import { ProvisioningTemplate as IOT_ProvisioningTemplate } from './iot/ProvisioningTemplate';
import { RoleAlias as IOT_RoleAlias } from './iot/RoleAlias';
import { Thing as IOT_Thing } from './iot/Thing';
import { ThingGroup as IOT_ThingGroup } from './iot/ThingGroup';
import { ThingGroupMembership as IOT_ThingGroupMembership } from './iot/ThingGroupMembership';
import { ThingPrincipalAttachment as IOT_ThingPrincipalAttachment } from './iot/ThingPrincipalAttachment';
import { ThingType as IOT_ThingType } from './iot/ThingType';
import { TopicRule as IOT_TopicRule } from './iot/TopicRule';
import { TopicRuleDestination as IOT_TopicRuleDestination } from './iot/TopicRuleDestination';
import { Channel as IVS_Channel } from './ivs/Channel';
import { PlaybackKeyPair as IVS_PlaybackKeyPair } from './ivs/PlaybackKeyPair';
import { RecordingConfiguration as IVS_RecordingConfiguration } from './ivs/RecordingConfiguration';
import { LoggingConfiguration as IVSCHAT_LoggingConfiguration } from './ivschat/LoggingConfiguration';
import { Room as IVSCHAT_Room } from './ivschat/Room';
import { DataSource as KENDRA_DataSource } from './kendra/DataSource';
import { Experience as KENDRA_Experience } from './kendra/Experience';
import { Faq as KENDRA_Faq } from './kendra/Faq';
import { Index as KENDRA_Index } from './kendra/Index';
import { QuerySuggestionsBlockList as KENDRA_QuerySuggestionsBlockList } from './kendra/QuerySuggestionsBlockList';
import { Thesaurus as KENDRA_Thesaurus } from './kendra/Thesaurus';
import { Keyspace as KEYSPACES_Keyspace } from './keyspaces/Keyspace';
import { Table as KEYSPACES_Table } from './keyspaces/Table';
import { AnalyticsApplication as KINESIS_AnalyticsApplication } from './kinesis/AnalyticsApplication';
import { FirehoseDeliveryStream as KINESIS_FirehoseDeliveryStream } from './kinesis/FirehoseDeliveryStream';
import { ResourcePolicy as KINESIS_ResourcePolicy } from './kinesis/ResourcePolicy';
import { Stream as KINESIS_Stream } from './kinesis/Stream';
import { StreamConsumer as KINESIS_StreamConsumer } from './kinesis/StreamConsumer';
import { VideoStream as KINESIS_VideoStream } from './kinesis/VideoStream';
import { Application as KINESISANALYTICSV2_Application } from './kinesisanalyticsv2/Application';
import { ApplicationSnapshot as KINESISANALYTICSV2_ApplicationSnapshot } from './kinesisanalyticsv2/ApplicationSnapshot';
import { Alias as KMS_Alias } from './kms/Alias';
import { Ciphertext as KMS_Ciphertext } from './kms/Ciphertext';
import { CustomKeyStore as KMS_CustomKeyStore } from './kms/CustomKeyStore';
import { ExternalKey as KMS_ExternalKey } from './kms/ExternalKey';
import { Grant as KMS_Grant } from './kms/Grant';
import { Key as KMS_Key } from './kms/Key';
import { KeyPolicy as KMS_KeyPolicy } from './kms/KeyPolicy';
import { ReplicaExternalKey as KMS_ReplicaExternalKey } from './kms/ReplicaExternalKey';
import { ReplicaKey as KMS_ReplicaKey } from './kms/ReplicaKey';
import { DataLakeSettings as LAKEFORMATION_DataLakeSettings } from './lakeformation/DataLakeSettings';
import { LfTag as LAKEFORMATION_LfTag } from './lakeformation/LfTag';
import { Permissions as LAKEFORMATION_Permissions } from './lakeformation/Permissions';
import { Resource as LAKEFORMATION_Resource } from './lakeformation/Resource';
import { ResourceLfTags as LAKEFORMATION_ResourceLfTags } from './lakeformation/ResourceLfTags';
import { Alias as LAMBDA_Alias } from './lambda/Alias';
import { CodeSigningConfig as LAMBDA_CodeSigningConfig } from './lambda/CodeSigningConfig';
import { EventSourceMapping as LAMBDA_EventSourceMapping } from './lambda/EventSourceMapping';
import { Function as LAMBDA_Function } from './lambda/Function';
import { FunctionEventInvokeConfig as LAMBDA_FunctionEventInvokeConfig } from './lambda/FunctionEventInvokeConfig';
import { FunctionUrl as LAMBDA_FunctionUrl } from './lambda/FunctionUrl';
import { Invocation as LAMBDA_Invocation } from './lambda/Invocation';
import { LayerVersion as LAMBDA_LayerVersion } from './lambda/LayerVersion';
import { LayerVersionPermission as LAMBDA_LayerVersionPermission } from './lambda/LayerVersionPermission';
import { Permission as LAMBDA_Permission } from './lambda/Permission';
import { ProvisionedConcurrencyConfig as LAMBDA_ProvisionedConcurrencyConfig } from './lambda/ProvisionedConcurrencyConfig';
import { Listener as LB_Listener } from './lb/Listener';
import { ListenerCertificate as LB_ListenerCertificate } from './lb/ListenerCertificate';
import { ListenerRule as LB_ListenerRule } from './lb/ListenerRule';
import { LoadBalancer as LB_LoadBalancer } from './lb/LoadBalancer';
import { TargetGroup as LB_TargetGroup } from './lb/TargetGroup';
import { TargetGroupAttachment as LB_TargetGroupAttachment } from './lb/TargetGroupAttachment';
import { TrustStore as LB_TrustStore } from './lb/TrustStore';
import { TrustStoreRevocation as LB_TrustStoreRevocation } from './lb/TrustStoreRevocation';
import { Bot as LEX_Bot } from './lex/Bot';
import { BotAlias as LEX_BotAlias } from './lex/BotAlias';
import { Intent as LEX_Intent } from './lex/Intent';
import { SlotType as LEX_SlotType } from './lex/SlotType';
import { V2modelsBot as LEX_V2modelsBot } from './lex/V2modelsBot';
import { V2modelsBotLocale as LEX_V2modelsBotLocale } from './lex/V2modelsBotLocale';
import { V2modelsBotVersion as LEX_V2modelsBotVersion } from './lex/V2modelsBotVersion';
import { V2modelsIntent as LEX_V2modelsIntent } from './lex/V2modelsIntent';
import { V2modelsSlot as LEX_V2modelsSlot } from './lex/V2modelsSlot';
import { V2modelsSlotType as LEX_V2modelsSlotType } from './lex/V2modelsSlotType';
import { Association as LICENSEMANAGER_Association } from './licensemanager/Association';
import { LicenseConfiguration as LICENSEMANAGER_LicenseConfiguration } from './licensemanager/LicenseConfiguration';
import { LicenseGrant as LICENSEMANAGER_LicenseGrant } from './licensemanager/LicenseGrant';
import { LicenseGrantAccepter as LICENSEMANAGER_LicenseGrantAccepter } from './licensemanager/LicenseGrantAccepter';
import { Bucket as LIGHTSAIL_Bucket } from './lightsail/Bucket';
import { BucketAccessKey as LIGHTSAIL_BucketAccessKey } from './lightsail/BucketAccessKey';
import { BucketResourceAccess as LIGHTSAIL_BucketResourceAccess } from './lightsail/BucketResourceAccess';
import { Certificate as LIGHTSAIL_Certificate } from './lightsail/Certificate';
import { ContainerService as LIGHTSAIL_ContainerService } from './lightsail/ContainerService';
import { ContainerServiceDeploymentVersion as LIGHTSAIL_ContainerServiceDeploymentVersion } from './lightsail/ContainerServiceDeploymentVersion';
import { Database as LIGHTSAIL_Database } from './lightsail/Database';
import { Disk as LIGHTSAIL_Disk } from './lightsail/Disk';
import { Disk_attachment as LIGHTSAIL_Disk_attachment } from './lightsail/Disk_attachment';
import { Distribution as LIGHTSAIL_Distribution } from './lightsail/Distribution';
import { Domain as LIGHTSAIL_Domain } from './lightsail/Domain';
import { DomainEntry as LIGHTSAIL_DomainEntry } from './lightsail/DomainEntry';
import { Instance as LIGHTSAIL_Instance } from './lightsail/Instance';
import { InstancePublicPorts as LIGHTSAIL_InstancePublicPorts } from './lightsail/InstancePublicPorts';
import { KeyPair as LIGHTSAIL_KeyPair } from './lightsail/KeyPair';
import { Lb as LIGHTSAIL_Lb } from './lightsail/Lb';
import { LbAttachment as LIGHTSAIL_LbAttachment } from './lightsail/LbAttachment';
import { LbCertificate as LIGHTSAIL_LbCertificate } from './lightsail/LbCertificate';
import { LbCertificateAttachment as LIGHTSAIL_LbCertificateAttachment } from './lightsail/LbCertificateAttachment';
import { LbHttpsRedirectionPolicy as LIGHTSAIL_LbHttpsRedirectionPolicy } from './lightsail/LbHttpsRedirectionPolicy';
import { LbStickinessPolicy as LIGHTSAIL_LbStickinessPolicy } from './lightsail/LbStickinessPolicy';
import { StaticIp as LIGHTSAIL_StaticIp } from './lightsail/StaticIp';
import { StaticIpAttachment as LIGHTSAIL_StaticIpAttachment } from './lightsail/StaticIpAttachment';
import { GeofenceCollection as LOCATION_GeofenceCollection } from './location/GeofenceCollection';
import { Location_Map as LOCATION_Map } from './location/Map';
import { PlaceIndex as LOCATION_PlaceIndex } from './location/PlaceIndex';
import { RouteCalculation as LOCATION_RouteCalculation } from './location/RouteCalculation';
import { Tracker as LOCATION_Tracker } from './location/Tracker';
import { TrackerAssociation as LOCATION_TrackerAssociation } from './location/TrackerAssociation';
import { CustomDataIdentifier as MACIE_CustomDataIdentifier } from './macie/CustomDataIdentifier';
import { FindingsFilter as MACIE_FindingsFilter } from './macie/FindingsFilter';
import { Account as MACIE2_Account } from './macie2/Account';
import { ClassificationExportConfiguration as MACIE2_ClassificationExportConfiguration } from './macie2/ClassificationExportConfiguration';
import { ClassificationJob as MACIE2_ClassificationJob } from './macie2/ClassificationJob';
import { InvitationAccepter as MACIE2_InvitationAccepter } from './macie2/InvitationAccepter';
import { Member as MACIE2_Member } from './macie2/Member';
import { OrganizationAdminAccount as MACIE2_OrganizationAdminAccount } from './macie2/OrganizationAdminAccount';
import { Queue as MEDIACONVERT_Queue } from './mediaconvert/Queue';
import { Channel as MEDIALIVE_Channel } from './medialive/Channel';
import { Input as MEDIALIVE_Input } from './medialive/Input';
import { InputSecurityGroup as MEDIALIVE_InputSecurityGroup } from './medialive/InputSecurityGroup';
import { Multiplex as MEDIALIVE_Multiplex } from './medialive/Multiplex';
import { MultiplexProgram as MEDIALIVE_MultiplexProgram } from './medialive/MultiplexProgram';
import { Channel as MEDIAPACKAGE_Channel } from './mediapackage/Channel';
import { Container as MEDIASTORE_Container } from './mediastore/Container';
import { ContainerPolicy as MEDIASTORE_ContainerPolicy } from './mediastore/ContainerPolicy';
import { Acl as MEMORYDB_Acl } from './memorydb/Acl';
import { Cluster as MEMORYDB_Cluster } from './memorydb/Cluster';
import { ParameterGroup as MEMORYDB_ParameterGroup } from './memorydb/ParameterGroup';
import { Snapshot as MEMORYDB_Snapshot } from './memorydb/Snapshot';
import { SubnetGroup as MEMORYDB_SubnetGroup } from './memorydb/SubnetGroup';
import { User as MEMORYDB_User } from './memorydb/User';
import { Broker as MQ_Broker } from './mq/Broker';
import { Configuration as MQ_Configuration } from './mq/Configuration';
import { Cluster as MSK_Cluster } from './msk/Cluster';
import { ClusterPolicy as MSK_ClusterPolicy } from './msk/ClusterPolicy';
import { Configuration as MSK_Configuration } from './msk/Configuration';
import { Replicator as MSK_Replicator } from './msk/Replicator';
import { ScramSecretAssociation as MSK_ScramSecretAssociation } from './msk/ScramSecretAssociation';
import { ServerlessCluster as MSK_ServerlessCluster } from './msk/ServerlessCluster';
import { VpcConnection as MSK_VpcConnection } from './msk/VpcConnection';
import { Connector as MSKCONNECT_Connector } from './mskconnect/Connector';
import { CustomPlugin as MSKCONNECT_CustomPlugin } from './mskconnect/CustomPlugin';
import { WorkerConfiguration as MSKCONNECT_WorkerConfiguration } from './mskconnect/WorkerConfiguration';
import { Environment as MWAA_Environment } from './mwaa/Environment';
import { Cluster as NEPTUNE_Cluster } from './neptune/Cluster';
import { ClusterEndpoint as NEPTUNE_ClusterEndpoint } from './neptune/ClusterEndpoint';
import { ClusterInstance as NEPTUNE_ClusterInstance } from './neptune/ClusterInstance';
import { ClusterParameterGroup as NEPTUNE_ClusterParameterGroup } from './neptune/ClusterParameterGroup';
import { ClusterSnapshot as NEPTUNE_ClusterSnapshot } from './neptune/ClusterSnapshot';
import { EventSubscription as NEPTUNE_EventSubscription } from './neptune/EventSubscription';
import { GlobalCluster as NEPTUNE_GlobalCluster } from './neptune/GlobalCluster';
import { ParameterGroup as NEPTUNE_ParameterGroup } from './neptune/ParameterGroup';
import { SubnetGroup as NEPTUNE_SubnetGroup } from './neptune/SubnetGroup';
import { Firewall as NETWORKFIREWALL_Firewall } from './networkfirewall/Firewall';
import { FirewallPolicy as NETWORKFIREWALL_FirewallPolicy } from './networkfirewall/FirewallPolicy';
import { LoggingConfiguration as NETWORKFIREWALL_LoggingConfiguration } from './networkfirewall/LoggingConfiguration';
import { ResourcePolicy as NETWORKFIREWALL_ResourcePolicy } from './networkfirewall/ResourcePolicy';
import { RuleGroup as NETWORKFIREWALL_RuleGroup } from './networkfirewall/RuleGroup';
import { AttachmentAccepter as NETWORKMANAGER_AttachmentAccepter } from './networkmanager/AttachmentAccepter';
import { ConnectAttachment as NETWORKMANAGER_ConnectAttachment } from './networkmanager/ConnectAttachment';
import { Connection as NETWORKMANAGER_Connection } from './networkmanager/Connection';
import { ConnectPeer as NETWORKMANAGER_ConnectPeer } from './networkmanager/ConnectPeer';
import { CoreNetwork as NETWORKMANAGER_CoreNetwork } from './networkmanager/CoreNetwork';
import { CoreNetworkPolicyAttachment as NETWORKMANAGER_CoreNetworkPolicyAttachment } from './networkmanager/CoreNetworkPolicyAttachment';
import { CustomerGatewayAssociation as NETWORKMANAGER_CustomerGatewayAssociation } from './networkmanager/CustomerGatewayAssociation';
import { Device as NETWORKMANAGER_Device } from './networkmanager/Device';
import { GlobalNetwork as NETWORKMANAGER_GlobalNetwork } from './networkmanager/GlobalNetwork';
import { Link as NETWORKMANAGER_Link } from './networkmanager/Link';
import { LinkAssociation as NETWORKMANAGER_LinkAssociation } from './networkmanager/LinkAssociation';
import { Site as NETWORKMANAGER_Site } from './networkmanager/Site';
import { SiteToSiteVpnAttachment as NETWORKMANAGER_SiteToSiteVpnAttachment } from './networkmanager/SiteToSiteVpnAttachment';
import { TransitGatewayConnectPeerAssociation as NETWORKMANAGER_TransitGatewayConnectPeerAssociation } from './networkmanager/TransitGatewayConnectPeerAssociation';
import { TransitGatewayPeering as NETWORKMANAGER_TransitGatewayPeering } from './networkmanager/TransitGatewayPeering';
import { TransitGatewayRegistration as NETWORKMANAGER_TransitGatewayRegistration } from './networkmanager/TransitGatewayRegistration';
import { TransitGatewayRouteTableAttachment as NETWORKMANAGER_TransitGatewayRouteTableAttachment } from './networkmanager/TransitGatewayRouteTableAttachment';
import { VpcAttachment as NETWORKMANAGER_VpcAttachment } from './networkmanager/VpcAttachment';
import { Link as OAM_Link } from './oam/Link';
import { Sink as OAM_Sink } from './oam/Sink';
import { SinkPolicy as OAM_SinkPolicy } from './oam/SinkPolicy';
import { Domain as OPENSEARCH_Domain } from './opensearch/Domain';
import { DomainPolicy as OPENSEARCH_DomainPolicy } from './opensearch/DomainPolicy';
import { DomainSamlOptions as OPENSEARCH_DomainSamlOptions } from './opensearch/DomainSamlOptions';
import { InboundConnectionAccepter as OPENSEARCH_InboundConnectionAccepter } from './opensearch/InboundConnectionAccepter';
import { OutboundConnection as OPENSEARCH_OutboundConnection } from './opensearch/OutboundConnection';
import { Package as OPENSEARCH_Package } from './opensearch/Package';
import { PackageAssociation as OPENSEARCH_PackageAssociation } from './opensearch/PackageAssociation';
import { ServerlessAccessPolicy as OPENSEARCH_ServerlessAccessPolicy } from './opensearch/ServerlessAccessPolicy';
import { ServerlessCollection as OPENSEARCH_ServerlessCollection } from './opensearch/ServerlessCollection';
import { ServerlessLifecyclePolicy as OPENSEARCH_ServerlessLifecyclePolicy } from './opensearch/ServerlessLifecyclePolicy';
import { ServerlessSecurityConfig as OPENSEARCH_ServerlessSecurityConfig } from './opensearch/ServerlessSecurityConfig';
import { ServerlessSecurityPolicy as OPENSEARCH_ServerlessSecurityPolicy } from './opensearch/ServerlessSecurityPolicy';
import { ServerlessVpcEndpoint as OPENSEARCH_ServerlessVpcEndpoint } from './opensearch/ServerlessVpcEndpoint';
import { VpcEndpoint as OPENSEARCH_VpcEndpoint } from './opensearch/VpcEndpoint';
import { Pipeline as OPENSEARCHINGEST_Pipeline } from './opensearchingest/Pipeline';
import { Application as OPSWORKS_Application } from './opsworks/Application';
import { CustomLayer as OPSWORKS_CustomLayer } from './opsworks/CustomLayer';
import { EcsClusterLayer as OPSWORKS_EcsClusterLayer } from './opsworks/EcsClusterLayer';
import { GangliaLayer as OPSWORKS_GangliaLayer } from './opsworks/GangliaLayer';
import { HaproxyLayer as OPSWORKS_HaproxyLayer } from './opsworks/HaproxyLayer';
import { Instance as OPSWORKS_Instance } from './opsworks/Instance';
import { JavaAppLayer as OPSWORKS_JavaAppLayer } from './opsworks/JavaAppLayer';
import { MemcachedLayer as OPSWORKS_MemcachedLayer } from './opsworks/MemcachedLayer';
import { MysqlLayer as OPSWORKS_MysqlLayer } from './opsworks/MysqlLayer';
import { NodejsAppLayer as OPSWORKS_NodejsAppLayer } from './opsworks/NodejsAppLayer';
import { Permission as OPSWORKS_Permission } from './opsworks/Permission';
import { PhpAppLayer as OPSWORKS_PhpAppLayer } from './opsworks/PhpAppLayer';
import { RailsAppLayer as OPSWORKS_RailsAppLayer } from './opsworks/RailsAppLayer';
import { RdsDbInstance as OPSWORKS_RdsDbInstance } from './opsworks/RdsDbInstance';
import { Stack as OPSWORKS_Stack } from './opsworks/Stack';
import { StaticWebLayer as OPSWORKS_StaticWebLayer } from './opsworks/StaticWebLayer';
import { UserProfile as OPSWORKS_UserProfile } from './opsworks/UserProfile';
import { Account as ORGANIZATIONS_Account } from './organizations/Account';
import { DelegatedAdministrator as ORGANIZATIONS_DelegatedAdministrator } from './organizations/DelegatedAdministrator';
import { Organization as ORGANIZATIONS_Organization } from './organizations/Organization';
import { OrganizationalUnit as ORGANIZATIONS_OrganizationalUnit } from './organizations/OrganizationalUnit';
import { Policy as ORGANIZATIONS_Policy } from './organizations/Policy';
import { PolicyAttachment as ORGANIZATIONS_PolicyAttachment } from './organizations/PolicyAttachment';
import { ResourcePolicy as ORGANIZATIONS_ResourcePolicy } from './organizations/ResourcePolicy';
import { AdmChannel as PINPOINT_AdmChannel } from './pinpoint/AdmChannel';
import { ApnsChannel as PINPOINT_ApnsChannel } from './pinpoint/ApnsChannel';
import { ApnsSandboxChannel as PINPOINT_ApnsSandboxChannel } from './pinpoint/ApnsSandboxChannel';
import { ApnsVoipChannel as PINPOINT_ApnsVoipChannel } from './pinpoint/ApnsVoipChannel';
import { ApnsVoipSandboxChannel as PINPOINT_ApnsVoipSandboxChannel } from './pinpoint/ApnsVoipSandboxChannel';
import { App as PINPOINT_App } from './pinpoint/App';
import { BaiduChannel as PINPOINT_BaiduChannel } from './pinpoint/BaiduChannel';
import { EmailChannel as PINPOINT_EmailChannel } from './pinpoint/EmailChannel';
import { EventStream as PINPOINT_EventStream } from './pinpoint/EventStream';
import { GcmChannel as PINPOINT_GcmChannel } from './pinpoint/GcmChannel';
import { SmsChannel as PINPOINT_SmsChannel } from './pinpoint/SmsChannel';
import { Pipe as PIPES_Pipe } from './pipes/Pipe';
import { Ledger as QLDB_Ledger } from './qldb/Ledger';
import { Stream as QLDB_Stream } from './qldb/Stream';
import { AccountSubscription as QUICKSIGHT_AccountSubscription } from './quicksight/AccountSubscription';
import { Analysis as QUICKSIGHT_Analysis } from './quicksight/Analysis';
import { Dashboard as QUICKSIGHT_Dashboard } from './quicksight/Dashboard';
import { DataSet as QUICKSIGHT_DataSet } from './quicksight/DataSet';
import { DataSource as QUICKSIGHT_DataSource } from './quicksight/DataSource';
import { Folder as QUICKSIGHT_Folder } from './quicksight/Folder';
import { FolderMembership as QUICKSIGHT_FolderMembership } from './quicksight/FolderMembership';
import { Group as QUICKSIGHT_Group } from './quicksight/Group';
import { GroupMembership as QUICKSIGHT_GroupMembership } from './quicksight/GroupMembership';
import { IamPolicyAssignment as QUICKSIGHT_IamPolicyAssignment } from './quicksight/IamPolicyAssignment';
import { Ingestion as QUICKSIGHT_Ingestion } from './quicksight/Ingestion';
import { Namespace as QUICKSIGHT_Namespace } from './quicksight/Namespace';
import { RefreshSchedule as QUICKSIGHT_RefreshSchedule } from './quicksight/RefreshSchedule';
import { Template as QUICKSIGHT_Template } from './quicksight/Template';
import { TemplateAlias as QUICKSIGHT_TemplateAlias } from './quicksight/TemplateAlias';
import { Theme as QUICKSIGHT_Theme } from './quicksight/Theme';
import { User as QUICKSIGHT_User } from './quicksight/User';
import { VpcConnection as QUICKSIGHT_VpcConnection } from './quicksight/VpcConnection';
import { PrincipalAssociation as RAM_PrincipalAssociation } from './ram/PrincipalAssociation';
import { ResourceAssociation as RAM_ResourceAssociation } from './ram/ResourceAssociation';
import { ResourceShare as RAM_ResourceShare } from './ram/ResourceShare';
import { ResourceShareAccepter as RAM_ResourceShareAccepter } from './ram/ResourceShareAccepter';
import { SharingWithOrganization as RAM_SharingWithOrganization } from './ram/SharingWithOrganization';
import { Rule as RBIN_Rule } from './rbin/Rule';
import { Cluster as RDS_Cluster } from './rds/Cluster';
import { ClusterActivityStream as RDS_ClusterActivityStream } from './rds/ClusterActivityStream';
import { ClusterEndpoint as RDS_ClusterEndpoint } from './rds/ClusterEndpoint';
import { ClusterInstance as RDS_ClusterInstance } from './rds/ClusterInstance';
import { ClusterParameterGroup as RDS_ClusterParameterGroup } from './rds/ClusterParameterGroup';
import { ClusterRoleAssociation as RDS_ClusterRoleAssociation } from './rds/ClusterRoleAssociation';
import { ClusterSnapshot as RDS_ClusterSnapshot } from './rds/ClusterSnapshot';
import { CustomDbEngineVersion as RDS_CustomDbEngineVersion } from './rds/CustomDbEngineVersion';
import { EventSubscription as RDS_EventSubscription } from './rds/EventSubscription';
import { ExportTask as RDS_ExportTask } from './rds/ExportTask';
import { GlobalCluster as RDS_GlobalCluster } from './rds/GlobalCluster';
import { Instance as RDS_Instance } from './rds/Instance';
import { InstanceAutomatedBackupsReplication as RDS_InstanceAutomatedBackupsReplication } from './rds/InstanceAutomatedBackupsReplication';
import { OptionGroup as RDS_OptionGroup } from './rds/OptionGroup';
import { ParameterGroup as RDS_ParameterGroup } from './rds/ParameterGroup';
import { Proxy as RDS_Proxy } from './rds/Proxy';
import { ProxyDefaultTargetGroup as RDS_ProxyDefaultTargetGroup } from './rds/ProxyDefaultTargetGroup';
import { ProxyEndpoint as RDS_ProxyEndpoint } from './rds/ProxyEndpoint';
import { ProxyTarget as RDS_ProxyTarget } from './rds/ProxyTarget';
import { ReservedInstance as RDS_ReservedInstance } from './rds/ReservedInstance';
import { RoleAssociation as RDS_RoleAssociation } from './rds/RoleAssociation';
import { Snapshot as RDS_Snapshot } from './rds/Snapshot';
import { SnapshotCopy as RDS_SnapshotCopy } from './rds/SnapshotCopy';
import { SubnetGroup as RDS_SubnetGroup } from './rds/SubnetGroup';
import { AuthenticationProfile as REDSHIFT_AuthenticationProfile } from './redshift/AuthenticationProfile';
import { Cluster as REDSHIFT_Cluster } from './redshift/Cluster';
import { ClusterIamRoles as REDSHIFT_ClusterIamRoles } from './redshift/ClusterIamRoles';
import { ClusterSnapshot as REDSHIFT_ClusterSnapshot } from './redshift/ClusterSnapshot';
import { DataShareAuthorization as REDSHIFT_DataShareAuthorization } from './redshift/DataShareAuthorization';
import { DataShareConsumerAssociation as REDSHIFT_DataShareConsumerAssociation } from './redshift/DataShareConsumerAssociation';
import { EndpointAccess as REDSHIFT_EndpointAccess } from './redshift/EndpointAccess';
import { EndpointAuthorization as REDSHIFT_EndpointAuthorization } from './redshift/EndpointAuthorization';
import { EventSubscription as REDSHIFT_EventSubscription } from './redshift/EventSubscription';
import { HsmClientCertificate as REDSHIFT_HsmClientCertificate } from './redshift/HsmClientCertificate';
import { HsmConfiguration as REDSHIFT_HsmConfiguration } from './redshift/HsmConfiguration';
import { ParameterGroup as REDSHIFT_ParameterGroup } from './redshift/ParameterGroup';
import { Partner as REDSHIFT_Partner } from './redshift/Partner';
import { ResourcePolicy as REDSHIFT_ResourcePolicy } from './redshift/ResourcePolicy';
import { ScheduledAction as REDSHIFT_ScheduledAction } from './redshift/ScheduledAction';
import { SnapshotCopyGrant as REDSHIFT_SnapshotCopyGrant } from './redshift/SnapshotCopyGrant';
import { SnapshotSchedule as REDSHIFT_SnapshotSchedule } from './redshift/SnapshotSchedule';
import { SnapshotScheduleAssociation as REDSHIFT_SnapshotScheduleAssociation } from './redshift/SnapshotScheduleAssociation';
import { SubnetGroup as REDSHIFT_SubnetGroup } from './redshift/SubnetGroup';
import { UsageLimit as REDSHIFT_UsageLimit } from './redshift/UsageLimit';
import { Statement as REDSHIFTDATA_Statement } from './redshiftdata/Statement';
import { EndpointAccess as REDSHIFTSERVERLESS_EndpointAccess } from './redshiftserverless/EndpointAccess';
import { Namespace as REDSHIFTSERVERLESS_Namespace } from './redshiftserverless/Namespace';
import { ResourcePolicy as REDSHIFTSERVERLESS_ResourcePolicy } from './redshiftserverless/ResourcePolicy';
import { Snapshot as REDSHIFTSERVERLESS_Snapshot } from './redshiftserverless/Snapshot';
import { UsageLimit as REDSHIFTSERVERLESS_UsageLimit } from './redshiftserverless/UsageLimit';
import { Workgroup as REDSHIFTSERVERLESS_Workgroup } from './redshiftserverless/Workgroup';
import { Collection as REKOGNITION_Collection } from './rekognition/Collection';
import { Project as REKOGNITION_Project } from './rekognition/Project';
import { Index as RESOURCEEXPLORER_Index } from './resourceexplorer/Index';
import { View as RESOURCEEXPLORER_View } from './resourceexplorer/View';
import { Group as RESOURCEGROUPS_Group } from './resourcegroups/Group';
import { Resource as RESOURCEGROUPS_Resource } from './resourcegroups/Resource';
import { Profile as ROLESANYWHERE_Profile } from './rolesanywhere/Profile';
import { TrustAnchor as ROLESANYWHERE_TrustAnchor } from './rolesanywhere/TrustAnchor';
import { CidrCollection as ROUTE53_CidrCollection } from './route53/CidrCollection';
import { CidrLocation as ROUTE53_CidrLocation } from './route53/CidrLocation';
import { DelegationSet as ROUTE53_DelegationSet } from './route53/DelegationSet';
import { HealthCheck as ROUTE53_HealthCheck } from './route53/HealthCheck';
import { HostedZoneDnsSec as ROUTE53_HostedZoneDnsSec } from './route53/HostedZoneDnsSec';
import { KeySigningKey as ROUTE53_KeySigningKey } from './route53/KeySigningKey';
import { QueryLog as ROUTE53_QueryLog } from './route53/QueryLog';
import { Record as ROUTE53_Record } from './route53/Record';
import { ResolverConfig as ROUTE53_ResolverConfig } from './route53/ResolverConfig';
import { ResolverDnsSecConfig as ROUTE53_ResolverDnsSecConfig } from './route53/ResolverDnsSecConfig';
import { ResolverEndpoint as ROUTE53_ResolverEndpoint } from './route53/ResolverEndpoint';
import { ResolverFirewallConfig as ROUTE53_ResolverFirewallConfig } from './route53/ResolverFirewallConfig';
import { ResolverFirewallDomainList as ROUTE53_ResolverFirewallDomainList } from './route53/ResolverFirewallDomainList';
import { ResolverFirewallRule as ROUTE53_ResolverFirewallRule } from './route53/ResolverFirewallRule';
import { ResolverFirewallRuleGroup as ROUTE53_ResolverFirewallRuleGroup } from './route53/ResolverFirewallRuleGroup';
import { ResolverFirewallRuleGroupAssociation as ROUTE53_ResolverFirewallRuleGroupAssociation } from './route53/ResolverFirewallRuleGroupAssociation';
import { ResolverQueryLogConfig as ROUTE53_ResolverQueryLogConfig } from './route53/ResolverQueryLogConfig';
import { ResolverQueryLogConfigAssociation as ROUTE53_ResolverQueryLogConfigAssociation } from './route53/ResolverQueryLogConfigAssociation';
import { ResolverRule as ROUTE53_ResolverRule } from './route53/ResolverRule';
import { ResolverRuleAssociation as ROUTE53_ResolverRuleAssociation } from './route53/ResolverRuleAssociation';
import { TrafficPolicy as ROUTE53_TrafficPolicy } from './route53/TrafficPolicy';
import { TrafficPolicyInstance as ROUTE53_TrafficPolicyInstance } from './route53/TrafficPolicyInstance';
import { VpcAssociationAuthorization as ROUTE53_VpcAssociationAuthorization } from './route53/VpcAssociationAuthorization';
import { Zone as ROUTE53_Zone } from './route53/Zone';
import { ZoneAssociation as ROUTE53_ZoneAssociation } from './route53/ZoneAssociation';
import { DelegationSignerRecord as ROUTE53DOMAINS_DelegationSignerRecord } from './route53domains/DelegationSignerRecord';
import { RegisteredDomain as ROUTE53DOMAINS_RegisteredDomain } from './route53domains/RegisteredDomain';
import { Cluster as ROUTE53RECOVERYCONTROL_Cluster } from './route53recoverycontrol/Cluster';
import { ControlPanel as ROUTE53RECOVERYCONTROL_ControlPanel } from './route53recoverycontrol/ControlPanel';
import { RoutingControl as ROUTE53RECOVERYCONTROL_RoutingControl } from './route53recoverycontrol/RoutingControl';
import { SafetyRule as ROUTE53RECOVERYCONTROL_SafetyRule } from './route53recoverycontrol/SafetyRule';
import { Cell as ROUTE53RECOVERYREADINESS_Cell } from './route53recoveryreadiness/Cell';
import { ReadinessCheck as ROUTE53RECOVERYREADINESS_ReadinessCheck } from './route53recoveryreadiness/ReadinessCheck';
import { RecoveryGroup as ROUTE53RECOVERYREADINESS_RecoveryGroup } from './route53recoveryreadiness/RecoveryGroup';
import { ResourceSet as ROUTE53RECOVERYREADINESS_ResourceSet } from './route53recoveryreadiness/ResourceSet';
import { AppMonitor as RUM_AppMonitor } from './rum/AppMonitor';
import { MetricsDestination as RUM_MetricsDestination } from './rum/MetricsDestination';
import { AccessPoint as S3_AccessPoint } from './s3/AccessPoint';
import { AccountPublicAccessBlock as S3_AccountPublicAccessBlock } from './s3/AccountPublicAccessBlock';
import { AnalyticsConfiguration as S3_AnalyticsConfiguration } from './s3/AnalyticsConfiguration';
import { Bucket as S3_Bucket } from './s3/Bucket';
import { BucketAccelerateConfigurationV2 as S3_BucketAccelerateConfigurationV2 } from './s3/BucketAccelerateConfigurationV2';
import { BucketAclV2 as S3_BucketAclV2 } from './s3/BucketAclV2';
import { BucketCorsConfigurationV2 as S3_BucketCorsConfigurationV2 } from './s3/BucketCorsConfigurationV2';
import { BucketIntelligentTieringConfiguration as S3_BucketIntelligentTieringConfiguration } from './s3/BucketIntelligentTieringConfiguration';
import { BucketLifecycleConfigurationV2 as S3_BucketLifecycleConfigurationV2 } from './s3/BucketLifecycleConfigurationV2';
import { BucketLoggingV2 as S3_BucketLoggingV2 } from './s3/BucketLoggingV2';
import { BucketMetric as S3_BucketMetric } from './s3/BucketMetric';
import { BucketNotification as S3_BucketNotification } from './s3/BucketNotification';
import { BucketObject as S3_BucketObject } from './s3/BucketObject';
import { BucketObjectLockConfigurationV2 as S3_BucketObjectLockConfigurationV2 } from './s3/BucketObjectLockConfigurationV2';
import { BucketObjectv2 as S3_BucketObjectv2 } from './s3/BucketObjectv2';
import { BucketOwnershipControls as S3_BucketOwnershipControls } from './s3/BucketOwnershipControls';
import { BucketPolicy as S3_BucketPolicy } from './s3/BucketPolicy';
import { BucketPublicAccessBlock as S3_BucketPublicAccessBlock } from './s3/BucketPublicAccessBlock';
import { BucketReplicationConfig as S3_BucketReplicationConfig } from './s3/BucketReplicationConfig';
import { BucketRequestPaymentConfigurationV2 as S3_BucketRequestPaymentConfigurationV2 } from './s3/BucketRequestPaymentConfigurationV2';
import { BucketServerSideEncryptionConfigurationV2 as S3_BucketServerSideEncryptionConfigurationV2 } from './s3/BucketServerSideEncryptionConfigurationV2';
import { BucketV2 as S3_BucketV2 } from './s3/BucketV2';
import { BucketVersioningV2 as S3_BucketVersioningV2 } from './s3/BucketVersioningV2';
import { BucketWebsiteConfigurationV2 as S3_BucketWebsiteConfigurationV2 } from './s3/BucketWebsiteConfigurationV2';
import { DirectoryBucket as S3_DirectoryBucket } from './s3/DirectoryBucket';
import { Inventory as S3_Inventory } from './s3/Inventory';
import { ObjectCopy as S3_ObjectCopy } from './s3/ObjectCopy';
import { AccessGrant as S3CONTROL_AccessGrant } from './s3control/AccessGrant';
import { AccessGrantsInstance as S3CONTROL_AccessGrantsInstance } from './s3control/AccessGrantsInstance';
import { AccessGrantsInstanceResourcePolicy as S3CONTROL_AccessGrantsInstanceResourcePolicy } from './s3control/AccessGrantsInstanceResourcePolicy';
import { AccessGrantsLocation as S3CONTROL_AccessGrantsLocation } from './s3control/AccessGrantsLocation';
import { AccessPointPolicy as S3CONTROL_AccessPointPolicy } from './s3control/AccessPointPolicy';
import { Bucket as S3CONTROL_Bucket } from './s3control/Bucket';
import { BucketLifecycleConfiguration as S3CONTROL_BucketLifecycleConfiguration } from './s3control/BucketLifecycleConfiguration';
import { BucketPolicy as S3CONTROL_BucketPolicy } from './s3control/BucketPolicy';
import { MultiRegionAccessPoint as S3CONTROL_MultiRegionAccessPoint } from './s3control/MultiRegionAccessPoint';
import { MultiRegionAccessPointPolicy as S3CONTROL_MultiRegionAccessPointPolicy } from './s3control/MultiRegionAccessPointPolicy';
import { ObjectLambdaAccessPoint as S3CONTROL_ObjectLambdaAccessPoint } from './s3control/ObjectLambdaAccessPoint';
import { ObjectLambdaAccessPointPolicy as S3CONTROL_ObjectLambdaAccessPointPolicy } from './s3control/ObjectLambdaAccessPointPolicy';
import { StorageLensConfiguration as S3CONTROL_StorageLensConfiguration } from './s3control/StorageLensConfiguration';
import { Endpoint as S3OUTPOSTS_Endpoint } from './s3outposts/Endpoint';
import { App as SAGEMAKER_App } from './sagemaker/App';
import { AppImageConfig as SAGEMAKER_AppImageConfig } from './sagemaker/AppImageConfig';
import { CodeRepository as SAGEMAKER_CodeRepository } from './sagemaker/CodeRepository';
import { DataQualityJobDefinition as SAGEMAKER_DataQualityJobDefinition } from './sagemaker/DataQualityJobDefinition';
import { Device as SAGEMAKER_Device } from './sagemaker/Device';
import { DeviceFleet as SAGEMAKER_DeviceFleet } from './sagemaker/DeviceFleet';
import { Domain as SAGEMAKER_Domain } from './sagemaker/Domain';
import { Endpoint as SAGEMAKER_Endpoint } from './sagemaker/Endpoint';
import { EndpointConfiguration as SAGEMAKER_EndpointConfiguration } from './sagemaker/EndpointConfiguration';
import { FeatureGroup as SAGEMAKER_FeatureGroup } from './sagemaker/FeatureGroup';
import { FlowDefinition as SAGEMAKER_FlowDefinition } from './sagemaker/FlowDefinition';
import { HumanTaskUI as SAGEMAKER_HumanTaskUI } from './sagemaker/HumanTaskUI';
import { Image as SAGEMAKER_Image } from './sagemaker/Image';
import { ImageVersion as SAGEMAKER_ImageVersion } from './sagemaker/ImageVersion';
import { Model as SAGEMAKER_Model } from './sagemaker/Model';
import { ModelPackageGroup as SAGEMAKER_ModelPackageGroup } from './sagemaker/ModelPackageGroup';
import { ModelPackageGroupPolicy as SAGEMAKER_ModelPackageGroupPolicy } from './sagemaker/ModelPackageGroupPolicy';
import { MonitoringSchedule as SAGEMAKER_MonitoringSchedule } from './sagemaker/MonitoringSchedule';
import { NotebookInstance as SAGEMAKER_NotebookInstance } from './sagemaker/NotebookInstance';
import { NotebookInstanceLifecycleConfiguration as SAGEMAKER_NotebookInstanceLifecycleConfiguration } from './sagemaker/NotebookInstanceLifecycleConfiguration';
import { Pipeline as SAGEMAKER_Pipeline } from './sagemaker/Pipeline';
import { Project as SAGEMAKER_Project } from './sagemaker/Project';
import { ServicecatalogPortfolioStatus as SAGEMAKER_ServicecatalogPortfolioStatus } from './sagemaker/ServicecatalogPortfolioStatus';
import { Space as SAGEMAKER_Space } from './sagemaker/Space';
import { StudioLifecycleConfig as SAGEMAKER_StudioLifecycleConfig } from './sagemaker/StudioLifecycleConfig';
import { UserProfile as SAGEMAKER_UserProfile } from './sagemaker/UserProfile';
import { Workforce as SAGEMAKER_Workforce } from './sagemaker/Workforce';
import { Workteam as SAGEMAKER_Workteam } from './sagemaker/Workteam';
import { Schedule as SCHEDULER_Schedule } from './scheduler/Schedule';
import { ScheduleGroup as SCHEDULER_ScheduleGroup } from './scheduler/ScheduleGroup';
import { Discoverer as SCHEMAS_Discoverer } from './schemas/Discoverer';
import { Registry as SCHEMAS_Registry } from './schemas/Registry';
import { RegistryPolicy as SCHEMAS_RegistryPolicy } from './schemas/RegistryPolicy';
import { Schema as SCHEMAS_Schema } from './schemas/Schema';
import { Secret as SECRETSMANAGER_Secret } from './secretsmanager/Secret';
import { SecretPolicy as SECRETSMANAGER_SecretPolicy } from './secretsmanager/SecretPolicy';
import { SecretRotation as SECRETSMANAGER_SecretRotation } from './secretsmanager/SecretRotation';
import { SecretVersion as SECRETSMANAGER_SecretVersion } from './secretsmanager/SecretVersion';
import { Account as SECURITYHUB_Account } from './securityhub/Account';
import { ActionTarget as SECURITYHUB_ActionTarget } from './securityhub/ActionTarget';
import { AutomationRule as SECURITYHUB_AutomationRule } from './securityhub/AutomationRule';
import { FindingAggregator as SECURITYHUB_FindingAggregator } from './securityhub/FindingAggregator';
import { Insight as SECURITYHUB_Insight } from './securityhub/Insight';
import { InviteAccepter as SECURITYHUB_InviteAccepter } from './securityhub/InviteAccepter';
import { Member as SECURITYHUB_Member } from './securityhub/Member';
import { OrganizationAdminAccount as SECURITYHUB_OrganizationAdminAccount } from './securityhub/OrganizationAdminAccount';
import { OrganizationConfiguration as SECURITYHUB_OrganizationConfiguration } from './securityhub/OrganizationConfiguration';
import { ProductSubscription as SECURITYHUB_ProductSubscription } from './securityhub/ProductSubscription';
import { StandardsControl as SECURITYHUB_StandardsControl } from './securityhub/StandardsControl';
import { StandardsSubscription as SECURITYHUB_StandardsSubscription } from './securityhub/StandardsSubscription';
import { AwsLogSource as SECURITYLAKE_AwsLogSource } from './securitylake/AwsLogSource';
import { CustomLogSource as SECURITYLAKE_CustomLogSource } from './securitylake/CustomLogSource';
import { DataLake as SECURITYLAKE_DataLake } from './securitylake/DataLake';
import { CloudFormationStack as SERVERLESSREPOSITORY_CloudFormationStack } from './serverlessrepository/CloudFormationStack';
import { BudgetResourceAssociation as SERVICECATALOG_BudgetResourceAssociation } from './servicecatalog/BudgetResourceAssociation';
import { Constraint as SERVICECATALOG_Constraint } from './servicecatalog/Constraint';
import { OrganizationsAccess as SERVICECATALOG_OrganizationsAccess } from './servicecatalog/OrganizationsAccess';
import { Portfolio as SERVICECATALOG_Portfolio } from './servicecatalog/Portfolio';
import { PortfolioShare as SERVICECATALOG_PortfolioShare } from './servicecatalog/PortfolioShare';
import { PrincipalPortfolioAssociation as SERVICECATALOG_PrincipalPortfolioAssociation } from './servicecatalog/PrincipalPortfolioAssociation';
import { Product as SERVICECATALOG_Product } from './servicecatalog/Product';
import { ProductPortfolioAssociation as SERVICECATALOG_ProductPortfolioAssociation } from './servicecatalog/ProductPortfolioAssociation';
import { ProvisionedProduct as SERVICECATALOG_ProvisionedProduct } from './servicecatalog/ProvisionedProduct';
import { ProvisioningArtifact as SERVICECATALOG_ProvisioningArtifact } from './servicecatalog/ProvisioningArtifact';
import { ServiceAction as SERVICECATALOG_ServiceAction } from './servicecatalog/ServiceAction';
import { TagOption as SERVICECATALOG_TagOption } from './servicecatalog/TagOption';
import { TagOptionResourceAssociation as SERVICECATALOG_TagOptionResourceAssociation } from './servicecatalog/TagOptionResourceAssociation';
import { HttpNamespace as SERVICEDISCOVERY_HttpNamespace } from './servicediscovery/HttpNamespace';
import { Instance as SERVICEDISCOVERY_Instance } from './servicediscovery/Instance';
import { PrivateDnsNamespace as SERVICEDISCOVERY_PrivateDnsNamespace } from './servicediscovery/PrivateDnsNamespace';
import { PublicDnsNamespace as SERVICEDISCOVERY_PublicDnsNamespace } from './servicediscovery/PublicDnsNamespace';
import { Service as SERVICEDISCOVERY_Service } from './servicediscovery/Service';
import { ServiceQuota as SERVICEQUOTAS_ServiceQuota } from './servicequotas/ServiceQuota';
import { Template as SERVICEQUOTAS_Template } from './servicequotas/Template';
import { TemplateAssociation as SERVICEQUOTAS_TemplateAssociation } from './servicequotas/TemplateAssociation';
import { ActiveReceiptRuleSet as SES_ActiveReceiptRuleSet } from './ses/ActiveReceiptRuleSet';
import { ConfigurationSet as SES_ConfigurationSet } from './ses/ConfigurationSet';
import { DomainDkim as SES_DomainDkim } from './ses/DomainDkim';
import { DomainIdentity as SES_DomainIdentity } from './ses/DomainIdentity';
import { DomainIdentityVerification as SES_DomainIdentityVerification } from './ses/DomainIdentityVerification';
import { EmailIdentity as SES_EmailIdentity } from './ses/EmailIdentity';
import { EventDestination as SES_EventDestination } from './ses/EventDestination';
import { IdentityNotificationTopic as SES_IdentityNotificationTopic } from './ses/IdentityNotificationTopic';
import { IdentityPolicy as SES_IdentityPolicy } from './ses/IdentityPolicy';
import { MailFrom as SES_MailFrom } from './ses/MailFrom';
import { ReceiptFilter as SES_ReceiptFilter } from './ses/ReceiptFilter';
import { ReceiptRule as SES_ReceiptRule } from './ses/ReceiptRule';
import { ReceiptRuleSet as SES_ReceiptRuleSet } from './ses/ReceiptRuleSet';
import { Template as SES_Template } from './ses/Template';
import { AccountVdmAttributes as SESV2_AccountVdmAttributes } from './sesv2/AccountVdmAttributes';
import { ConfigurationSet as SESV2_ConfigurationSet } from './sesv2/ConfigurationSet';
import { ConfigurationSetEventDestination as SESV2_ConfigurationSetEventDestination } from './sesv2/ConfigurationSetEventDestination';
import { ContactList as SESV2_ContactList } from './sesv2/ContactList';
import { DedicatedIpAssignment as SESV2_DedicatedIpAssignment } from './sesv2/DedicatedIpAssignment';
import { DedicatedIpPool as SESV2_DedicatedIpPool } from './sesv2/DedicatedIpPool';
import { EmailIdentity as SESV2_EmailIdentity } from './sesv2/EmailIdentity';
import { EmailIdentityFeedbackAttributes as SESV2_EmailIdentityFeedbackAttributes } from './sesv2/EmailIdentityFeedbackAttributes';
import { EmailIdentityMailFromAttributes as SESV2_EmailIdentityMailFromAttributes } from './sesv2/EmailIdentityMailFromAttributes';
import { EmailIdentityPolicy as SESV2_EmailIdentityPolicy } from './sesv2/EmailIdentityPolicy';
import { Activity as SFN_Activity } from './sfn/Activity';
import { Alias as SFN_Alias } from './sfn/Alias';
import { StateMachine as SFN_StateMachine } from './sfn/StateMachine';
import { ApplicationLayerAutomaticResponse as SHIELD_ApplicationLayerAutomaticResponse } from './shield/ApplicationLayerAutomaticResponse';
import { DrtAccessLogBucketAssociation as SHIELD_DrtAccessLogBucketAssociation } from './shield/DrtAccessLogBucketAssociation';
import { DrtAccessRoleArnAssociation as SHIELD_DrtAccessRoleArnAssociation } from './shield/DrtAccessRoleArnAssociation';
import { ProactiveEngagement as SHIELD_ProactiveEngagement } from './shield/ProactiveEngagement';
import { Protection as SHIELD_Protection } from './shield/Protection';
import { ProtectionGroup as SHIELD_ProtectionGroup } from './shield/ProtectionGroup';
import { ProtectionHealthCheckAssociation as SHIELD_ProtectionHealthCheckAssociation } from './shield/ProtectionHealthCheckAssociation';
import { SigningJob as SIGNER_SigningJob } from './signer/SigningJob';
import { SigningProfile as SIGNER_SigningProfile } from './signer/SigningProfile';
import { SigningProfilePermission as SIGNER_SigningProfilePermission } from './signer/SigningProfilePermission';
import { Domain as SIMPLEDB_Domain } from './simpledb/Domain';
import { DataProtectionPolicy as SNS_DataProtectionPolicy } from './sns/DataProtectionPolicy';
import { PlatformApplication as SNS_PlatformApplication } from './sns/PlatformApplication';
import { SmsPreferences as SNS_SmsPreferences } from './sns/SmsPreferences';
import { Topic as SNS_Topic } from './sns/Topic';
import { TopicPolicy as SNS_TopicPolicy } from './sns/TopicPolicy';
import { TopicSubscription as SNS_TopicSubscription } from './sns/TopicSubscription';
import { Queue as SQS_Queue } from './sqs/Queue';
import { QueuePolicy as SQS_QueuePolicy } from './sqs/QueuePolicy';
import { RedriveAllowPolicy as SQS_RedriveAllowPolicy } from './sqs/RedriveAllowPolicy';
import { RedrivePolicy as SQS_RedrivePolicy } from './sqs/RedrivePolicy';
import { Activation as SSM_Activation } from './ssm/Activation';
import { Association as SSM_Association } from './ssm/Association';
import { ContactsRotation as SSM_ContactsRotation } from './ssm/ContactsRotation';
import { DefaultPatchBaseline as SSM_DefaultPatchBaseline } from './ssm/DefaultPatchBaseline';
import { Document as SSM_Document } from './ssm/Document';
import { MaintenanceWindow as SSM_MaintenanceWindow } from './ssm/MaintenanceWindow';
import { MaintenanceWindowTarget as SSM_MaintenanceWindowTarget } from './ssm/MaintenanceWindowTarget';
import { MaintenanceWindowTask as SSM_MaintenanceWindowTask } from './ssm/MaintenanceWindowTask';
import { Parameter as SSM_Parameter } from './ssm/Parameter';
import { PatchBaseline as SSM_PatchBaseline } from './ssm/PatchBaseline';
import { PatchGroup as SSM_PatchGroup } from './ssm/PatchGroup';
import { ResourceDataSync as SSM_ResourceDataSync } from './ssm/ResourceDataSync';
import { ServiceSetting as SSM_ServiceSetting } from './ssm/ServiceSetting';
import { Contact as SSMCONTACTS_Contact } from './ssmcontacts/Contact';
import { ContactChannel as SSMCONTACTS_ContactChannel } from './ssmcontacts/ContactChannel';
import { Plan as SSMCONTACTS_Plan } from './ssmcontacts/Plan';
import { ReplicationSet as SSMINCIDENTS_ReplicationSet } from './ssmincidents/ReplicationSet';
import { ResponsePlan as SSMINCIDENTS_ResponsePlan } from './ssmincidents/ResponsePlan';
import { AccountAssignment as SSOADMIN_AccountAssignment } from './ssoadmin/AccountAssignment';
import { Application as SSOADMIN_Application } from './ssoadmin/Application';
import { ApplicationAccessScope as SSOADMIN_ApplicationAccessScope } from './ssoadmin/ApplicationAccessScope';
import { ApplicationAssignment as SSOADMIN_ApplicationAssignment } from './ssoadmin/ApplicationAssignment';
import { ApplicationAssignmentConfiguration as SSOADMIN_ApplicationAssignmentConfiguration } from './ssoadmin/ApplicationAssignmentConfiguration';
import { CustomerManagedPolicyAttachment as SSOADMIN_CustomerManagedPolicyAttachment } from './ssoadmin/CustomerManagedPolicyAttachment';
import { InstanceAccessControlAttributes as SSOADMIN_InstanceAccessControlAttributes } from './ssoadmin/InstanceAccessControlAttributes';
import { ManagedPolicyAttachment as SSOADMIN_ManagedPolicyAttachment } from './ssoadmin/ManagedPolicyAttachment';
import { PermissionsBoundaryAttachment as SSOADMIN_PermissionsBoundaryAttachment } from './ssoadmin/PermissionsBoundaryAttachment';
import { PermissionSet as SSOADMIN_PermissionSet } from './ssoadmin/PermissionSet';
import { PermissionSetInlinePolicy as SSOADMIN_PermissionSetInlinePolicy } from './ssoadmin/PermissionSetInlinePolicy';
import { TrustedTokenIssuer as SSOADMIN_TrustedTokenIssuer } from './ssoadmin/TrustedTokenIssuer';
import { Cache as STORAGEGATEWAY_Cache } from './storagegateway/Cache';
import { CachesIscsiVolume as STORAGEGATEWAY_CachesIscsiVolume } from './storagegateway/CachesIscsiVolume';
import { FileSystemAssociation as STORAGEGATEWAY_FileSystemAssociation } from './storagegateway/FileSystemAssociation';
import { Gateway as STORAGEGATEWAY_Gateway } from './storagegateway/Gateway';
import { NfsFileShare as STORAGEGATEWAY_NfsFileShare } from './storagegateway/NfsFileShare';
import { SmbFileShare as STORAGEGATEWAY_SmbFileShare } from './storagegateway/SmbFileShare';
import { StoredIscsiVolume as STORAGEGATEWAY_StoredIscsiVolume } from './storagegateway/StoredIscsiVolume';
import { TapePool as STORAGEGATEWAY_TapePool } from './storagegateway/TapePool';
import { UploadBuffer as STORAGEGATEWAY_UploadBuffer } from './storagegateway/UploadBuffer';
import { WorkingStorage as STORAGEGATEWAY_WorkingStorage } from './storagegateway/WorkingStorage';
import { Domain as SWF_Domain } from './swf/Domain';
import { Canary as SYNTHETICS_Canary } from './synthetics/Canary';
import { Group as SYNTHETICS_Group } from './synthetics/Group';
import { GroupAssociation as SYNTHETICS_GroupAssociation } from './synthetics/GroupAssociation';
import { Database as TIMESTREAMWRITE_Database } from './timestreamwrite/Database';
import { Table as TIMESTREAMWRITE_Table } from './timestreamwrite/Table';
import { LanguageModel as TRANSCRIBE_LanguageModel } from './transcribe/LanguageModel';
import { MedicalVocabulary as TRANSCRIBE_MedicalVocabulary } from './transcribe/MedicalVocabulary';
import { Vocabulary as TRANSCRIBE_Vocabulary } from './transcribe/Vocabulary';
import { VocabularyFilter as TRANSCRIBE_VocabularyFilter } from './transcribe/VocabularyFilter';
import { Access as TRANSFER_Access } from './transfer/Access';
import { Agreement as TRANSFER_Agreement } from './transfer/Agreement';
import { Certificate as TRANSFER_Certificate } from './transfer/Certificate';
import { Connector as TRANSFER_Connector } from './transfer/Connector';
import { Profile as TRANSFER_Profile } from './transfer/Profile';
import { Server as TRANSFER_Server } from './transfer/Server';
import { SshKey as TRANSFER_SshKey } from './transfer/SshKey';
import { Tag as TRANSFER_Tag } from './transfer/Tag';
import { User as TRANSFER_User } from './transfer/User';
import { Workflow as TRANSFER_Workflow } from './transfer/Workflow';
import { Endpoint as VERIFIEDACCESS_Endpoint } from './verifiedaccess/Endpoint';
import { Group as VERIFIEDACCESS_Group } from './verifiedaccess/Group';
import { Instance as VERIFIEDACCESS_Instance } from './verifiedaccess/Instance';
import { InstanceLoggingConfiguration as VERIFIEDACCESS_InstanceLoggingConfiguration } from './verifiedaccess/InstanceLoggingConfiguration';
import { InstanceTrustProviderAttachment as VERIFIEDACCESS_InstanceTrustProviderAttachment } from './verifiedaccess/InstanceTrustProviderAttachment';
import { TrustProvider as VERIFIEDACCESS_TrustProvider } from './verifiedaccess/TrustProvider';
import { PolicyStore as VERIFIEDPERMISSIONS_PolicyStore } from './verifiedpermissions/PolicyStore';
import { PolicyTemplate as VERIFIEDPERMISSIONS_PolicyTemplate } from './verifiedpermissions/PolicyTemplate';
import { Schema as VERIFIEDPERMISSIONS_Schema } from './verifiedpermissions/Schema';
import { SecurityGroupEgressRule as VPC_SecurityGroupEgressRule } from './vpc/SecurityGroupEgressRule';
import { SecurityGroupIngressRule as VPC_SecurityGroupIngressRule } from './vpc/SecurityGroupIngressRule';
import { AccessLogSubscription as VPCLATTICE_AccessLogSubscription } from './vpclattice/AccessLogSubscription';
import { AuthPolicy as VPCLATTICE_AuthPolicy } from './vpclattice/AuthPolicy';
import { Listener as VPCLATTICE_Listener } from './vpclattice/Listener';
import { ListenerRule as VPCLATTICE_ListenerRule } from './vpclattice/ListenerRule';
import { ResourcePolicy as VPCLATTICE_ResourcePolicy } from './vpclattice/ResourcePolicy';
import { Service as VPCLATTICE_Service } from './vpclattice/Service';
import { ServiceNetwork as VPCLATTICE_ServiceNetwork } from './vpclattice/ServiceNetwork';
import { ServiceNetworkServiceAssociation as VPCLATTICE_ServiceNetworkServiceAssociation } from './vpclattice/ServiceNetworkServiceAssociation';
import { ServiceNetworkVpcAssociation as VPCLATTICE_ServiceNetworkVpcAssociation } from './vpclattice/ServiceNetworkVpcAssociation';
import { TargetGroup as VPCLATTICE_TargetGroup } from './vpclattice/TargetGroup';
import { TargetGroupAttachment as VPCLATTICE_TargetGroupAttachment } from './vpclattice/TargetGroupAttachment';
import { ByteMatchSet as WAF_ByteMatchSet } from './waf/ByteMatchSet';
import { GeoMatchSet as WAF_GeoMatchSet } from './waf/GeoMatchSet';
import { IpSet as WAF_IpSet } from './waf/IpSet';
import { RateBasedRule as WAF_RateBasedRule } from './waf/RateBasedRule';
import { RegexMatchSet as WAF_RegexMatchSet } from './waf/RegexMatchSet';
import { RegexPatternSet as WAF_RegexPatternSet } from './waf/RegexPatternSet';
import { Rule as WAF_Rule } from './waf/Rule';
import { RuleGroup as WAF_RuleGroup } from './waf/RuleGroup';
import { SizeConstraintSet as WAF_SizeConstraintSet } from './waf/SizeConstraintSet';
import { SqlInjectionMatchSet as WAF_SqlInjectionMatchSet } from './waf/SqlInjectionMatchSet';
import { WebAcl as WAF_WebAcl } from './waf/WebAcl';
import { XssMatchSet as WAF_XssMatchSet } from './waf/XssMatchSet';
import { ByteMatchSet as WAFREGIONAL_ByteMatchSet } from './wafregional/ByteMatchSet';
import { GeoMatchSet as WAFREGIONAL_GeoMatchSet } from './wafregional/GeoMatchSet';
import { IpSet as WAFREGIONAL_IpSet } from './wafregional/IpSet';
import { RateBasedRule as WAFREGIONAL_RateBasedRule } from './wafregional/RateBasedRule';
import { RegexMatchSet as WAFREGIONAL_RegexMatchSet } from './wafregional/RegexMatchSet';
import { RegexPatternSet as WAFREGIONAL_RegexPatternSet } from './wafregional/RegexPatternSet';
import { Rule as WAFREGIONAL_Rule } from './wafregional/Rule';
import { RuleGroup as WAFREGIONAL_RuleGroup } from './wafregional/RuleGroup';
import { SizeConstraintSet as WAFREGIONAL_SizeConstraintSet } from './wafregional/SizeConstraintSet';
import { SqlInjectionMatchSet as WAFREGIONAL_SqlInjectionMatchSet } from './wafregional/SqlInjectionMatchSet';
import { WebAcl as WAFREGIONAL_WebAcl } from './wafregional/WebAcl';
import { WebAclAssociation as WAFREGIONAL_WebAclAssociation } from './wafregional/WebAclAssociation';
import { XssMatchSet as WAFREGIONAL_XssMatchSet } from './wafregional/XssMatchSet';
import { IpSet as WAFV2_IpSet } from './wafv2/IpSet';
import { RegexPatternSet as WAFV2_RegexPatternSet } from './wafv2/RegexPatternSet';
import { RuleGroup as WAFV2_RuleGroup } from './wafv2/RuleGroup';
import { WebAcl as WAFV2_WebAcl } from './wafv2/WebAcl';
import { WebAclAssociation as WAFV2_WebAclAssociation } from './wafv2/WebAclAssociation';
import { WebAclLoggingConfiguration as WAFV2_WebAclLoggingConfiguration } from './wafv2/WebAclLoggingConfiguration';
import { Fleet as WORKLINK_Fleet } from './worklink/Fleet';
import { WebsiteCertificateAuthorityAssociation as WORKLINK_WebsiteCertificateAuthorityAssociation } from './worklink/WebsiteCertificateAuthorityAssociation';
import { ConnectionAlias as WORKSPACES_ConnectionAlias } from './workspaces/ConnectionAlias';
import { Directory as WORKSPACES_Directory } from './workspaces/Directory';
import { IpGroup as WORKSPACES_IpGroup } from './workspaces/IpGroup';
import { Workspace as WORKSPACES_Workspace } from './workspaces/Workspace';
import { EncryptionConfig as XRAY_EncryptionConfig } from './xray/EncryptionConfig';
import { Group as XRAY_Group } from './xray/Group';
import { SamplingRule as XRAY_SamplingRule } from './xray/SamplingRule';

export class AWS_ResourceProperties {
  static readonly ResourceFactoryMap1: Map<AWS_ResourceType, () => Resource> =
    new Map([
      [
        AWS_ResourceType.ACCESSANALYZER_ANALYZER,
        () => new ACCESSANALYZER_Analyzer(),
      ],
      [
        AWS_ResourceType.ACCESSANALYZER_ARCHIVERULE,
        () => new ACCESSANALYZER_ArchiveRule(),
      ],
      [
        AWS_ResourceType.ACCOUNT_ALTERNATIVECONTACT,
        () => new ACCOUNT_AlternativeContact(),
      ],
      [
        AWS_ResourceType.ACCOUNT_PRIMARYCONTACT,
        () => new ACCOUNT_PrimaryContact(),
      ],
      [AWS_ResourceType.ACM_CERTIFICATE, () => new ACM_Certificate()],
      [
        AWS_ResourceType.ACM_CERTIFICATEVALIDATION,
        () => new ACM_CertificateValidation(),
      ],
      [AWS_ResourceType.ACMPCA_CERTIFICATE, () => new ACMPCA_Certificate()],
      [
        AWS_ResourceType.ACMPCA_CERTIFICATEAUTHORITY,
        () => new ACMPCA_CertificateAuthority(),
      ],
      [
        AWS_ResourceType.ACMPCA_CERTIFICATEAUTHORITYCERTIFICATE,
        () => new ACMPCA_CertificateAuthorityCertificate(),
      ],
      [AWS_ResourceType.ACMPCA_PERMISSION, () => new ACMPCA_Permission()],
      [AWS_ResourceType.ACMPCA_POLICY, () => new ACMPCA_Policy()],
      [AWS_ResourceType.ALB_LISTENER, () => new ALB_Listener()],
      [
        AWS_ResourceType.ALB_LISTENERCERTIFICATE,
        () => new ALB_ListenerCertificate(),
      ],
      [AWS_ResourceType.ALB_LISTENERRULE, () => new ALB_ListenerRule()],
      [AWS_ResourceType.ALB_LOADBALANCER, () => new ALB_LoadBalancer()],
      [AWS_ResourceType.ALB_TARGETGROUP, () => new ALB_TargetGroup()],
      [
        AWS_ResourceType.ALB_TARGETGROUPATTACHMENT,
        () => new ALB_TargetGroupAttachment(),
      ],
      [
        AWS_ResourceType.AMP_ALERTMANAGERDEFINITION,
        () => new AMP_AlertManagerDefinition(),
      ],
      [
        AWS_ResourceType.AMP_RULEGROUPNAMESPACE,
        () => new AMP_RuleGroupNamespace(),
      ],
      [AWS_ResourceType.AMP_SCRAPER, () => new AMP_Scraper()],
      [AWS_ResourceType.AMP_WORKSPACE, () => new AMP_Workspace()],
      [AWS_ResourceType.AMPLIFY_APP, () => new AMPLIFY_App()],
      [
        AWS_ResourceType.AMPLIFY_BACKENDENVIRONMENT,
        () => new AMPLIFY_BackendEnvironment(),
      ],
      [AWS_ResourceType.AMPLIFY_BRANCH, () => new AMPLIFY_Branch()],
      [
        AWS_ResourceType.AMPLIFY_DOMAINASSOCIATION,
        () => new AMPLIFY_DomainAssociation(),
      ],
      [AWS_ResourceType.AMPLIFY_WEBHOOK, () => new AMPLIFY_Webhook()],
      [AWS_ResourceType.APIGATEWAY_ACCOUNT, () => new APIGATEWAY_Account()],
      [AWS_ResourceType.APIGATEWAY_APIKEY, () => new APIGATEWAY_ApiKey()],
      [
        AWS_ResourceType.APIGATEWAY_AUTHORIZER,
        () => new APIGATEWAY_Authorizer(),
      ],
      [
        AWS_ResourceType.APIGATEWAY_BASEPATHMAPPING,
        () => new APIGATEWAY_BasePathMapping(),
      ],
      [
        AWS_ResourceType.APIGATEWAY_CLIENTCERTIFICATE,
        () => new APIGATEWAY_ClientCertificate(),
      ],
      [
        AWS_ResourceType.APIGATEWAY_DEPLOYMENT,
        () => new APIGATEWAY_Deployment(),
      ],
      [
        AWS_ResourceType.APIGATEWAY_DOCUMENTATIONPART,
        () => new APIGATEWAY_DocumentationPart(),
      ],
      [
        AWS_ResourceType.APIGATEWAY_DOCUMENTATIONVERSION,
        () => new APIGATEWAY_DocumentationVersion(),
      ],
      [
        AWS_ResourceType.APIGATEWAY_DOMAINNAME,
        () => new APIGATEWAY_DomainName(),
      ],
      [
        AWS_ResourceType.APIGATEWAY_INTEGRATION,
        () => new APIGATEWAY_Integration(),
      ],
      [
        AWS_ResourceType.APIGATEWAY_INTEGRATIONRESPONSE,
        () => new APIGATEWAY_IntegrationResponse(),
      ],
      [AWS_ResourceType.APIGATEWAY_METHOD, () => new APIGATEWAY_Method()],
      [
        AWS_ResourceType.APIGATEWAY_METHODRESPONSE,
        () => new APIGATEWAY_MethodResponse(),
      ],
      [
        AWS_ResourceType.APIGATEWAY_METHODSETTINGS,
        () => new APIGATEWAY_MethodSettings(),
      ],
      [AWS_ResourceType.APIGATEWAY_MODEL, () => new APIGATEWAY_Model()],
      [
        AWS_ResourceType.APIGATEWAY_REQUESTVALIDATOR,
        () => new APIGATEWAY_RequestValidator(),
      ],
      [AWS_ResourceType.APIGATEWAY_RESOURCE, () => new APIGATEWAY_Resource()],
      [AWS_ResourceType.APIGATEWAY_RESPONSE, () => new APIGATEWAY_Response()],
      [AWS_ResourceType.APIGATEWAY_RESTAPI, () => new APIGATEWAY_RestApi()],
      [
        AWS_ResourceType.APIGATEWAY_RESTAPIPOLICY,
        () => new APIGATEWAY_RestApiPolicy(),
      ],
      [AWS_ResourceType.APIGATEWAY_STAGE, () => new APIGATEWAY_Stage()],
      [AWS_ResourceType.APIGATEWAY_USAGEPLAN, () => new APIGATEWAY_UsagePlan()],
      [
        AWS_ResourceType.APIGATEWAY_USAGEPLANKEY,
        () => new APIGATEWAY_UsagePlanKey(),
      ],
      [AWS_ResourceType.APIGATEWAY_VPCLINK, () => new APIGATEWAY_VpcLink()],
      [AWS_ResourceType.APIGATEWAYV2_API, () => new APIGATEWAYV2_Api()],
      [
        AWS_ResourceType.APIGATEWAYV2_APIMAPPING,
        () => new APIGATEWAYV2_ApiMapping(),
      ],
      [
        AWS_ResourceType.APIGATEWAYV2_AUTHORIZER,
        () => new APIGATEWAYV2_Authorizer(),
      ],
      [
        AWS_ResourceType.APIGATEWAYV2_DEPLOYMENT,
        () => new APIGATEWAYV2_Deployment(),
      ],
      [
        AWS_ResourceType.APIGATEWAYV2_DOMAINNAME,
        () => new APIGATEWAYV2_DomainName(),
      ],
      [
        AWS_ResourceType.APIGATEWAYV2_INTEGRATION,
        () => new APIGATEWAYV2_Integration(),
      ],
      [
        AWS_ResourceType.APIGATEWAYV2_INTEGRATIONRESPONSE,
        () => new APIGATEWAYV2_IntegrationResponse(),
      ],
      [AWS_ResourceType.APIGATEWAYV2_MODEL, () => new APIGATEWAYV2_Model()],
      [AWS_ResourceType.APIGATEWAYV2_ROUTE, () => new APIGATEWAYV2_Route()],
      [
        AWS_ResourceType.APIGATEWAYV2_ROUTERESPONSE,
        () => new APIGATEWAYV2_RouteResponse(),
      ],
      [AWS_ResourceType.APIGATEWAYV2_STAGE, () => new APIGATEWAYV2_Stage()],
      [AWS_ResourceType.APIGATEWAYV2_VPCLINK, () => new APIGATEWAYV2_VpcLink()],
      [
        AWS_ResourceType.APPAUTOSCALING_POLICY,
        () => new APPAUTOSCALING_Policy(),
      ],
      [
        AWS_ResourceType.APPAUTOSCALING_SCHEDULEDACTION,
        () => new APPAUTOSCALING_ScheduledAction(),
      ],
      [
        AWS_ResourceType.APPAUTOSCALING_TARGET,
        () => new APPAUTOSCALING_Target(),
      ],
      [
        AWS_ResourceType.APPCONFIG_APPLICATION,
        () => new APPCONFIG_Application(),
      ],
      [
        AWS_ResourceType.APPCONFIG_CONFIGURATIONPROFILE,
        () => new APPCONFIG_ConfigurationProfile(),
      ],
      [AWS_ResourceType.APPCONFIG_DEPLOYMENT, () => new APPCONFIG_Deployment()],
      [
        AWS_ResourceType.APPCONFIG_DEPLOYMENTSTRATEGY,
        () => new APPCONFIG_DeploymentStrategy(),
      ],
      [
        AWS_ResourceType.APPCONFIG_ENVIRONMENT,
        () => new APPCONFIG_Environment(),
      ],
      [
        AWS_ResourceType.APPCONFIG_EVENTINTEGRATION,
        () => new APPCONFIG_EventIntegration(),
      ],
      [AWS_ResourceType.APPCONFIG_EXTENSION, () => new APPCONFIG_Extension()],
      [
        AWS_ResourceType.APPCONFIG_EXTENSIONASSOCIATION,
        () => new APPCONFIG_ExtensionAssociation(),
      ],
      [
        AWS_ResourceType.APPCONFIG_HOSTEDCONFIGURATIONVERSION,
        () => new APPCONFIG_HostedConfigurationVersion(),
      ],
      [
        AWS_ResourceType.APPFLOW_CONNECTORPROFILE,
        () => new APPFLOW_ConnectorProfile(),
      ],
      [AWS_ResourceType.APPFLOW_FLOW, () => new APPFLOW_Flow()],
      [
        AWS_ResourceType.APPINTEGRATIONS_DATAINTEGRATION,
        () => new APPINTEGRATIONS_DataIntegration(),
      ],
      [
        AWS_ResourceType.APPLICATIONINSIGHTS_APPLICATION,
        () => new APPLICATIONINSIGHTS_Application(),
      ],
      [AWS_ResourceType.APPMESH_GATEWAYROUTE, () => new APPMESH_GatewayRoute()],
      [AWS_ResourceType.APPMESH_MESH, () => new APPMESH_Mesh()],
      [AWS_ResourceType.APPMESH_ROUTE, () => new APPMESH_Route()],
      [
        AWS_ResourceType.APPMESH_VIRTUALGATEWAY,
        () => new APPMESH_VirtualGateway(),
      ],
      [AWS_ResourceType.APPMESH_VIRTUALNODE, () => new APPMESH_VirtualNode()],
      [
        AWS_ResourceType.APPMESH_VIRTUALROUTER,
        () => new APPMESH_VirtualRouter(),
      ],
      [
        AWS_ResourceType.APPMESH_VIRTUALSERVICE,
        () => new APPMESH_VirtualService(),
      ],
      [
        AWS_ResourceType.APPRUNNER_AUTOSCALINGCONFIGURATIONVERSION,
        () => new APPRUNNER_AutoScalingConfigurationVersion(),
      ],
      [AWS_ResourceType.APPRUNNER_CONNECTION, () => new APPRUNNER_Connection()],
      [
        AWS_ResourceType.APPRUNNER_CUSTOMDOMAINASSOCIATION,
        () => new APPRUNNER_CustomDomainAssociation(),
      ],
      [
        AWS_ResourceType.APPRUNNER_DEFAULTAUTOSCALINGCONFIGURATIONVERSION,
        () => new APPRUNNER_DefaultAutoScalingConfigurationVersion(),
      ],
      [AWS_ResourceType.APPRUNNER_DEPLOYMENT, () => new APPRUNNER_Deployment()],
      [
        AWS_ResourceType.APPRUNNER_OBSERVABILITYCONFIGURATION,
        () => new APPRUNNER_ObservabilityConfiguration(),
      ],
      [AWS_ResourceType.APPRUNNER_SERVICE, () => new APPRUNNER_Service()],
      [
        AWS_ResourceType.APPRUNNER_VPCCONNECTOR,
        () => new APPRUNNER_VpcConnector(),
      ],
      [
        AWS_ResourceType.APPRUNNER_VPCINGRESSCONNECTION,
        () => new APPRUNNER_VpcIngressConnection(),
      ],
      [
        AWS_ResourceType.APPSTREAM_DIRECTORYCONFIG,
        () => new APPSTREAM_DirectoryConfig(),
      ],
      [AWS_ResourceType.APPSTREAM_FLEET, () => new APPSTREAM_Fleet()],
      [
        AWS_ResourceType.APPSTREAM_FLEETSTACKASSOCIATION,
        () => new APPSTREAM_FleetStackAssociation(),
      ],
      [
        AWS_ResourceType.APPSTREAM_IMAGEBUILDER,
        () => new APPSTREAM_ImageBuilder(),
      ],
      [AWS_ResourceType.APPSTREAM_STACK, () => new APPSTREAM_Stack()],
      [AWS_ResourceType.APPSTREAM_USER, () => new APPSTREAM_User()],
      [
        AWS_ResourceType.APPSTREAM_USERSTACKASSOCIATION,
        () => new APPSTREAM_UserStackAssociation(),
      ],
      [AWS_ResourceType.APPSYNC_APICACHE, () => new APPSYNC_ApiCache()],
      [AWS_ResourceType.APPSYNC_APIKEY, () => new APPSYNC_ApiKey()],
      [AWS_ResourceType.APPSYNC_DATASOURCE, () => new APPSYNC_DataSource()],
      [AWS_ResourceType.APPSYNC_DOMAINNAME, () => new APPSYNC_DomainName()],
      [
        AWS_ResourceType.APPSYNC_DOMAINNAMEAPIASSOCIATION,
        () => new APPSYNC_DomainNameApiAssociation(),
      ],
      [AWS_ResourceType.APPSYNC_FUNCTION, () => new APPSYNC_Function()],
      [AWS_ResourceType.APPSYNC_GRAPHQLAPI, () => new APPSYNC_GraphQLApi()],
      [AWS_ResourceType.APPSYNC_RESOLVER, () => new APPSYNC_Resolver()],
      [AWS_ResourceType.APPSYNC_TYPE, () => new APPSYNC_Type()],
      [AWS_ResourceType.ATHENA_DATABASE, () => new ATHENA_Database()],
      [AWS_ResourceType.ATHENA_DATACATALOG, () => new ATHENA_DataCatalog()],
      [AWS_ResourceType.ATHENA_NAMEDQUERY, () => new ATHENA_NamedQuery()],
      [
        AWS_ResourceType.ATHENA_PREPAREDSTATEMENT,
        () => new ATHENA_PreparedStatement(),
      ],
      [AWS_ResourceType.ATHENA_WORKGROUP, () => new ATHENA_Workgroup()],
      [
        AWS_ResourceType.AUDITMANAGER_ACCOUNTREGISTRATION,
        () => new AUDITMANAGER_AccountRegistration(),
      ],
      [
        AWS_ResourceType.AUDITMANAGER_ASSESSMENT,
        () => new AUDITMANAGER_Assessment(),
      ],
      [
        AWS_ResourceType.AUDITMANAGER_ASSESSMENTDELEGATION,
        () => new AUDITMANAGER_AssessmentDelegation(),
      ],
      [
        AWS_ResourceType.AUDITMANAGER_ASSESSMENTREPORT,
        () => new AUDITMANAGER_AssessmentReport(),
      ],
      [AWS_ResourceType.AUDITMANAGER_CONTROL, () => new AUDITMANAGER_Control()],
      [
        AWS_ResourceType.AUDITMANAGER_FRAMEWORK,
        () => new AUDITMANAGER_Framework(),
      ],
      [
        AWS_ResourceType.AUDITMANAGER_FRAMEWORKSHARE,
        () => new AUDITMANAGER_FrameworkShare(),
      ],
      [
        AWS_ResourceType.AUDITMANAGER_ORGANIZATIONADMINACCOUNTREGISTRATION,
        () => new AUDITMANAGER_OrganizationAdminAccountRegistration(),
      ],
      [
        AWS_ResourceType.AUTOSCALING_ATTACHMENT,
        () => new AUTOSCALING_Attachment(),
      ],
      [AWS_ResourceType.AUTOSCALING_GROUP, () => new AUTOSCALING_Group()],
      [
        AWS_ResourceType.AUTOSCALING_LIFECYCLEHOOK,
        () => new AUTOSCALING_LifecycleHook(),
      ],
      [
        AWS_ResourceType.AUTOSCALING_NOTIFICATION,
        () => new AUTOSCALING_Notification(),
      ],
      [AWS_ResourceType.AUTOSCALING_POLICY, () => new AUTOSCALING_Policy()],
      [AWS_ResourceType.AUTOSCALING_SCHEDULE, () => new AUTOSCALING_Schedule()],
      [AWS_ResourceType.AUTOSCALING_TAG, () => new AUTOSCALING_Tag()],
      [
        AWS_ResourceType.AUTOSCALING_TRAFFICSOURCEATTACHMENT,
        () => new AUTOSCALING_TrafficSourceAttachment(),
      ],
      [
        AWS_ResourceType.AUTOSCALINGPLANS_SCALINGPLAN,
        () => new AUTOSCALINGPLANS_ScalingPlan(),
      ],
      [AWS_ResourceType.BACKUP_FRAMEWORK, () => new BACKUP_Framework()],
      [
        AWS_ResourceType.BACKUP_GLOBALSETTINGS,
        () => new BACKUP_GlobalSettings(),
      ],
      [AWS_ResourceType.BACKUP_PLAN, () => new BACKUP_Plan()],
      [
        AWS_ResourceType.BACKUP_REGIONSETTINGS,
        () => new BACKUP_RegionSettings(),
      ],
      [AWS_ResourceType.BACKUP_REPORTPLAN, () => new BACKUP_ReportPlan()],
      [AWS_ResourceType.BACKUP_SELECTION, () => new BACKUP_Selection()],
      [AWS_ResourceType.BACKUP_VAULT, () => new BACKUP_Vault()],
      [
        AWS_ResourceType.BACKUP_VAULTLOCKCONFIGURATION,
        () => new BACKUP_VaultLockConfiguration(),
      ],
      [
        AWS_ResourceType.BACKUP_VAULTNOTIFICATIONS,
        () => new BACKUP_VaultNotifications(),
      ],
      [AWS_ResourceType.BACKUP_VAULTPOLICY, () => new BACKUP_VaultPolicy()],
      [
        AWS_ResourceType.BATCH_COMPUTEENVIRONMENT,
        () => new BATCH_ComputeEnvironment(),
      ],
      [AWS_ResourceType.BATCH_JOBDEFINITION, () => new BATCH_JobDefinition()],
      [AWS_ResourceType.BATCH_JOBQUEUE, () => new BATCH_JobQueue()],
      [
        AWS_ResourceType.BATCH_SCHEDULINGPOLICY,
        () => new BATCH_SchedulingPolicy(),
      ],
      [AWS_ResourceType.BEDROCK_CUSTOMMODEL, () => new BEDROCK_CustomModel()],
      [
        AWS_ResourceType.BEDROCK_PROVISIONEDMODELTHROUGHPUT,
        () => new BEDROCK_ProvisionedModelThroughput(),
      ],
      [
        AWS_ResourceType.BEDROCKMODEL_INVOCATIONLOGGINGCONFIGURATION,
        () => new BEDROCKMODEL_InvocationLoggingConfiguration(),
      ],
      [AWS_ResourceType.BUDGETS_BUDGET, () => new BUDGETS_Budget()],
      [AWS_ResourceType.BUDGETS_BUDGETACTION, () => new BUDGETS_BudgetAction()],
      [
        AWS_ResourceType.CFG_AGGREGATEAUTHORIZATION,
        () => new CFG_AggregateAuthorization(),
      ],
      [
        AWS_ResourceType.CFG_CONFIGURATIONAGGREGATOR,
        () => new CFG_ConfigurationAggregator(),
      ],
      [AWS_ResourceType.CFG_CONFORMANCEPACK, () => new CFG_ConformancePack()],
      [AWS_ResourceType.CFG_DELIVERYCHANNEL, () => new CFG_DeliveryChannel()],
      [
        AWS_ResourceType.CFG_ORGANIZATIONCONFORMANCEPACK,
        () => new CFG_OrganizationConformancePack(),
      ],
      [
        AWS_ResourceType.CFG_ORGANIZATIONCUSTOMPOLICYRULE,
        () => new CFG_OrganizationCustomPolicyRule(),
      ],
      [
        AWS_ResourceType.CFG_ORGANIZATIONCUSTOMRULE,
        () => new CFG_OrganizationCustomRule(),
      ],
      [
        AWS_ResourceType.CFG_ORGANIZATIONMANAGEDRULE,
        () => new CFG_OrganizationManagedRule(),
      ],
      [AWS_ResourceType.CFG_RECORDER, () => new CFG_Recorder()],
      [AWS_ResourceType.CFG_RECORDERSTATUS, () => new CFG_RecorderStatus()],
      [
        AWS_ResourceType.CFG_REMEDIATIONCONFIGURATION,
        () => new CFG_RemediationConfiguration(),
      ],
      [
        AWS_ResourceType.CFG_RETENTIONCONFIGURATION,
        () => new CFG_RetentionConfiguration(),
      ],
      [AWS_ResourceType.CFG_RULE, () => new CFG_Rule()],
      [
        AWS_ResourceType.CHIME_SDKVOICEGLOBALSETTINGS,
        () => new CHIME_SdkvoiceGlobalSettings(),
      ],
      [
        AWS_ResourceType.CHIME_SDKVOICESIPMEDIAAPPLICATION,
        () => new CHIME_SdkvoiceSipMediaApplication(),
      ],
      [
        AWS_ResourceType.CHIME_SDKVOICESIPRULE,
        () => new CHIME_SdkvoiceSipRule(),
      ],
      [
        AWS_ResourceType.CHIME_SDKVOICEVOICEPROFILEDOMAIN,
        () => new CHIME_SdkvoiceVoiceProfileDomain(),
      ],
      [AWS_ResourceType.CHIME_VOICECONNECTOR, () => new CHIME_VoiceConnector()],
      [
        AWS_ResourceType.CHIME_VOICECONNECTORGROUP,
        () => new CHIME_VoiceConnectorGroup(),
      ],
      [
        AWS_ResourceType.CHIME_VOICECONNECTORLOGGING,
        () => new CHIME_VoiceConnectorLogging(),
      ],
      [
        AWS_ResourceType.CHIME_VOICECONNECTORORGANIZATION,
        () => new CHIME_VoiceConnectorOrganization(),
      ],
      [
        AWS_ResourceType.CHIME_VOICECONNECTORSTREAMING,
        () => new CHIME_VoiceConnectorStreaming(),
      ],
      [
        AWS_ResourceType.CHIME_VOICECONNECTORTERMINATION,
        () => new CHIME_VoiceConnectorTermination(),
      ],
      [
        AWS_ResourceType.CHIME_VOICECONNECTORTERMINATIONCREDENTIALS,
        () => new CHIME_VoiceConnectorTerminationCredentials(),
      ],
      [
        AWS_ResourceType.CHIMESDKMEDIAPIPELINES_MEDIAINSIGHTSPIPELINECONFIGURATION,
        () => new CHIMESDKMEDIAPIPELINES_MediaInsightsPipelineConfiguration(),
      ],
      [
        AWS_ResourceType.CLEANROOMS_COLLABORATION,
        () => new CLEANROOMS_Collaboration(),
      ],
      [
        AWS_ResourceType.CLEANROOMS_CONFIGUREDTABLE,
        () => new CLEANROOMS_ConfiguredTable(),
      ],
      [
        AWS_ResourceType.CLOUD9_ENVIRONMENTEC2,
        () => new CLOUD9_EnvironmentEC2(),
      ],
      [
        AWS_ResourceType.CLOUD9_ENVIRONMENTMEMBERSHIP,
        () => new CLOUD9_EnvironmentMembership(),
      ],
      [
        AWS_ResourceType.CLOUDCONTROL_RESOURCE,
        () => new CLOUDCONTROL_Resource(),
      ],
      [
        AWS_ResourceType.CLOUDFORMATION_CLOUDFORMATIONTYPE,
        () => new CLOUDFORMATION_CloudFormationType(),
      ],
      [AWS_ResourceType.CLOUDFORMATION_STACK, () => new CLOUDFORMATION_Stack()],
      [
        AWS_ResourceType.CLOUDFORMATION_STACKSET,
        () => new CLOUDFORMATION_StackSet(),
      ],
      [
        AWS_ResourceType.CLOUDFORMATION_STACKSETINSTANCE,
        () => new CLOUDFORMATION_StackSetInstance(),
      ],
      [
        AWS_ResourceType.CLOUDFRONT_CACHEPOLICY,
        () => new CLOUDFRONT_CachePolicy(),
      ],
      [
        AWS_ResourceType.CLOUDFRONT_CONTINUOUSDEPLOYMENTPOLICY,
        () => new CLOUDFRONT_ContinuousDeploymentPolicy(),
      ],
      [
        AWS_ResourceType.CLOUDFRONT_DISTRIBUTION,
        () => new CLOUDFRONT_Distribution(),
      ],
      [
        AWS_ResourceType.CLOUDFRONT_FIELDLEVELENCRYPTIONCONFIG,
        () => new CLOUDFRONT_FieldLevelEncryptionConfig(),
      ],
      [
        AWS_ResourceType.CLOUDFRONT_FIELDLEVELENCRYPTIONPROFILE,
        () => new CLOUDFRONT_FieldLevelEncryptionProfile(),
      ],
      [AWS_ResourceType.CLOUDFRONT_FUNCTION, () => new CLOUDFRONT_Function()],
      [AWS_ResourceType.CLOUDFRONT_KEYGROUP, () => new CLOUDFRONT_KeyGroup()],
      [
        AWS_ResourceType.CLOUDFRONT_KEYVALUESTORE,
        () => new CLOUDFRONT_KeyValueStore(),
      ],
      [
        AWS_ResourceType.CLOUDFRONT_MONITORINGSUBSCRIPTION,
        () => new CLOUDFRONT_MonitoringSubscription(),
      ],
      [
        AWS_ResourceType.CLOUDFRONT_ORIGINACCESSCONTROL,
        () => new CLOUDFRONT_OriginAccessControl(),
      ],
      [
        AWS_ResourceType.CLOUDFRONT_ORIGINACCESSIDENTITY,
        () => new CLOUDFRONT_OriginAccessIdentity(),
      ],
      [
        AWS_ResourceType.CLOUDFRONT_ORIGINREQUESTPOLICY,
        () => new CLOUDFRONT_OriginRequestPolicy(),
      ],
      [AWS_ResourceType.CLOUDFRONT_PUBLICKEY, () => new CLOUDFRONT_PublicKey()],
      [
        AWS_ResourceType.CLOUDFRONT_REALTIMELOGCONFIG,
        () => new CLOUDFRONT_RealtimeLogConfig(),
      ],
      [
        AWS_ResourceType.CLOUDFRONT_RESPONSEHEADERSPOLICY,
        () => new CLOUDFRONT_ResponseHeadersPolicy(),
      ],
      [AWS_ResourceType.CLOUDHSMV2_CLUSTER, () => new CLOUDHSMV2_Cluster()],
      [AWS_ResourceType.CLOUDHSMV2_HSM, () => new CLOUDHSMV2_Hsm()],
      [AWS_ResourceType.CLOUDSEARCH_DOMAIN, () => new CLOUDSEARCH_Domain()],
      [
        AWS_ResourceType.CLOUDSEARCH_DOMAINSERVICEACCESSPOLICY,
        () => new CLOUDSEARCH_DomainServiceAccessPolicy(),
      ],
      [
        AWS_ResourceType.CLOUDTRAIL_EVENTDATASTORE,
        () => new CLOUDTRAIL_EventDataStore(),
      ],
      [AWS_ResourceType.CLOUDTRAIL_TRAIL, () => new CLOUDTRAIL_Trail()],
      [
        AWS_ResourceType.CLOUDWATCH_COMPOSITEALARM,
        () => new CLOUDWATCH_CompositeAlarm(),
      ],
      [AWS_ResourceType.CLOUDWATCH_DASHBOARD, () => new CLOUDWATCH_Dashboard()],
      [
        AWS_ResourceType.CLOUDWATCH_EVENTAPIDESTINATION,
        () => new CLOUDWATCH_EventApiDestination(),
      ],
      [
        AWS_ResourceType.CLOUDWATCH_EVENTARCHIVE,
        () => new CLOUDWATCH_EventArchive(),
      ],
      [AWS_ResourceType.CLOUDWATCH_EVENTBUS, () => new CLOUDWATCH_EventBus()],
      [
        AWS_ResourceType.CLOUDWATCH_EVENTBUSPOLICY,
        () => new CLOUDWATCH_EventBusPolicy(),
      ],
      [
        AWS_ResourceType.CLOUDWATCH_EVENTCONNECTION,
        () => new CLOUDWATCH_EventConnection(),
      ],
      [
        AWS_ResourceType.CLOUDWATCH_EVENTENDPOINT,
        () => new CLOUDWATCH_EventEndpoint(),
      ],
      [
        AWS_ResourceType.CLOUDWATCH_EVENTPERMISSION,
        () => new CLOUDWATCH_EventPermission(),
      ],
      [AWS_ResourceType.CLOUDWATCH_EVENTRULE, () => new CLOUDWATCH_EventRule()],
      [
        AWS_ResourceType.CLOUDWATCH_EVENTTARGET,
        () => new CLOUDWATCH_EventTarget(),
      ],
      [
        AWS_ResourceType.CLOUDWATCH_INTERNETMONITOR,
        () => new CLOUDWATCH_InternetMonitor(),
      ],
      [
        AWS_ResourceType.CLOUDWATCH_LOGDATAPROTECTIONPOLICY,
        () => new CLOUDWATCH_LogDataProtectionPolicy(),
      ],
      [
        AWS_ResourceType.CLOUDWATCH_LOGDESTINATION,
        () => new CLOUDWATCH_LogDestination(),
      ],
      [
        AWS_ResourceType.CLOUDWATCH_LOGDESTINATIONPOLICY,
        () => new CLOUDWATCH_LogDestinationPolicy(),
      ],
      [AWS_ResourceType.CLOUDWATCH_LOGGROUP, () => new CLOUDWATCH_LogGroup()],
      [
        AWS_ResourceType.CLOUDWATCH_LOGMETRICFILTER,
        () => new CLOUDWATCH_LogMetricFilter(),
      ],
      [
        AWS_ResourceType.CLOUDWATCH_LOGRESOURCEPOLICY,
        () => new CLOUDWATCH_LogResourcePolicy(),
      ],
      [AWS_ResourceType.CLOUDWATCH_LOGSTREAM, () => new CLOUDWATCH_LogStream()],
      [
        AWS_ResourceType.CLOUDWATCH_LOGSUBSCRIPTIONFILTER,
        () => new CLOUDWATCH_LogSubscriptionFilter(),
      ],
      [
        AWS_ResourceType.CLOUDWATCH_METRICALARM,
        () => new CLOUDWATCH_MetricAlarm(),
      ],
      [
        AWS_ResourceType.CLOUDWATCH_METRICSTREAM,
        () => new CLOUDWATCH_MetricStream(),
      ],
      [
        AWS_ResourceType.CLOUDWATCH_QUERYDEFINITION,
        () => new CLOUDWATCH_QueryDefinition(),
      ],
      [AWS_ResourceType.CODEARTIFACT_DOMAIN, () => new CODEARTIFACT_Domain()],
      [
        AWS_ResourceType.CODEARTIFACT_DOMAINPERMISSIONS,
        () => new CODEARTIFACT_DomainPermissions(),
      ],
      [
        AWS_ResourceType.CODEARTIFACT_REPOSITORY,
        () => new CODEARTIFACT_Repository(),
      ],
      [
        AWS_ResourceType.CODEARTIFACT_REPOSITORYPERMISSIONSPOLICY,
        () => new CODEARTIFACT_RepositoryPermissionsPolicy(),
      ],
      [AWS_ResourceType.CODEBUILD_PROJECT, () => new CODEBUILD_Project()],
      [
        AWS_ResourceType.CODEBUILD_REPORTGROUP,
        () => new CODEBUILD_ReportGroup(),
      ],
      [
        AWS_ResourceType.CODEBUILD_RESOURCEPOLICY,
        () => new CODEBUILD_ResourcePolicy(),
      ],
      [
        AWS_ResourceType.CODEBUILD_SOURCECREDENTIAL,
        () => new CODEBUILD_SourceCredential(),
      ],
      [AWS_ResourceType.CODEBUILD_WEBHOOK, () => new CODEBUILD_Webhook()],
      [
        AWS_ResourceType.CODECATALYST_DEVENVIRONMENT,
        () => new CODECATALYST_DevEnvironment(),
      ],
      [AWS_ResourceType.CODECATALYST_PROJECT, () => new CODECATALYST_Project()],
      [
        AWS_ResourceType.CODECATALYST_SOURCEREPOSITORY,
        () => new CODECATALYST_SourceRepository(),
      ],
      [
        AWS_ResourceType.CODECOMMIT_APPROVALRULETEMPLATE,
        () => new CODECOMMIT_ApprovalRuleTemplate(),
      ],
      [
        AWS_ResourceType.CODECOMMIT_APPROVALRULETEMPLATEASSOCIATION,
        () => new CODECOMMIT_ApprovalRuleTemplateAssociation(),
      ],
      [
        AWS_ResourceType.CODECOMMIT_REPOSITORY,
        () => new CODECOMMIT_Repository(),
      ],
      [AWS_ResourceType.CODECOMMIT_TRIGGER, () => new CODECOMMIT_Trigger()],
      [
        AWS_ResourceType.CODEDEPLOY_APPLICATION,
        () => new CODEDEPLOY_Application(),
      ],
      [
        AWS_ResourceType.CODEDEPLOY_DEPLOYMENTCONFIG,
        () => new CODEDEPLOY_DeploymentConfig(),
      ],
      [
        AWS_ResourceType.CODEDEPLOY_DEPLOYMENTGROUP,
        () => new CODEDEPLOY_DeploymentGroup(),
      ],
      [
        AWS_ResourceType.CODEGURUPROFILER_PROFILINGGROUP,
        () => new CODEGURUPROFILER_ProfilingGroup(),
      ],
      [
        AWS_ResourceType.CODEGURUREVIEWER_REPOSITORYASSOCIATION,
        () => new CODEGURUREVIEWER_RepositoryAssociation(),
      ],
      [
        AWS_ResourceType.CODEPIPELINE_CUSTOMACTIONTYPE,
        () => new CODEPIPELINE_CustomActionType(),
      ],
      [
        AWS_ResourceType.CODEPIPELINE_PIPELINE,
        () => new CODEPIPELINE_Pipeline(),
      ],
      [AWS_ResourceType.CODEPIPELINE_WEBHOOK, () => new CODEPIPELINE_Webhook()],
      [
        AWS_ResourceType.CODESTARCONNECTIONS_CONNECTION,
        () => new CODESTARCONNECTIONS_Connection(),
      ],
      [
        AWS_ResourceType.CODESTARCONNECTIONS_HOST,
        () => new CODESTARCONNECTIONS_Host(),
      ],
      [
        AWS_ResourceType.CODESTARNOTIFICATIONS_NOTIFICATIONRULE,
        () => new CODESTARNOTIFICATIONS_NotificationRule(),
      ],
      [AWS_ResourceType.COGNITO_IDENTITYPOOL, () => new COGNITO_IdentityPool()],
      [
        AWS_ResourceType.COGNITO_IDENTITYPOOLPROVIDERPRINCIPALTAG,
        () => new COGNITO_IdentityPoolProviderPrincipalTag(),
      ],
      [
        AWS_ResourceType.COGNITO_IDENTITYPOOLROLEATTACHMENT,
        () => new COGNITO_IdentityPoolRoleAttachment(),
      ],
      [
        AWS_ResourceType.COGNITO_IDENTITYPROVIDER,
        () => new COGNITO_IdentityProvider(),
      ],
      [
        AWS_ResourceType.COGNITO_MANAGEDUSERPOOLCLIENT,
        () => new COGNITO_ManagedUserPoolClient(),
      ],
      [
        AWS_ResourceType.COGNITO_RESOURCESERVER,
        () => new COGNITO_ResourceServer(),
      ],
      [
        AWS_ResourceType.COGNITO_RISKCONFIGURATION,
        () => new COGNITO_RiskConfiguration(),
      ],
      [AWS_ResourceType.COGNITO_USER, () => new COGNITO_User()],
      [AWS_ResourceType.COGNITO_USERGROUP, () => new COGNITO_UserGroup()],
      [AWS_ResourceType.COGNITO_USERINGROUP, () => new COGNITO_UserInGroup()],
      [AWS_ResourceType.COGNITO_USERPOOL, () => new COGNITO_UserPool()],
      [
        AWS_ResourceType.COGNITO_USERPOOLCLIENT,
        () => new COGNITO_UserPoolClient(),
      ],
      [
        AWS_ResourceType.COGNITO_USERPOOLDOMAIN,
        () => new COGNITO_UserPoolDomain(),
      ],
      [
        AWS_ResourceType.COGNITO_USERPOOLUICUSTOMIZATION,
        () => new COGNITO_UserPoolUICustomization(),
      ],
      [
        AWS_ResourceType.COMPREHEND_DOCUMENTCLASSIFIER,
        () => new COMPREHEND_DocumentClassifier(),
      ],
      [
        AWS_ResourceType.COMPREHEND_ENTITYRECOGNIZER,
        () => new COMPREHEND_EntityRecognizer(),
      ],
      [
        AWS_ResourceType.CONNECT_BOTASSOCIATION,
        () => new CONNECT_BotAssociation(),
      ],
      [AWS_ResourceType.CONNECT_CONTACTFLOW, () => new CONNECT_ContactFlow()],
      [
        AWS_ResourceType.CONNECT_CONTACTFLOWMODULE,
        () => new CONNECT_ContactFlowModule(),
      ],
      [
        AWS_ResourceType.CONNECT_HOURSOFOPERATION,
        () => new CONNECT_HoursOfOperation(),
      ],
      [AWS_ResourceType.CONNECT_INSTANCE, () => new CONNECT_Instance()],
      [
        AWS_ResourceType.CONNECT_INSTANCESTORAGECONFIG,
        () => new CONNECT_InstanceStorageConfig(),
      ],
      [
        AWS_ResourceType.CONNECT_LAMBDAFUNCTIONASSOCIATION,
        () => new CONNECT_LambdaFunctionAssociation(),
      ],
      [AWS_ResourceType.CONNECT_PHONENUMBER, () => new CONNECT_PhoneNumber()],
      [AWS_ResourceType.CONNECT_QUEUE, () => new CONNECT_Queue()],
      [AWS_ResourceType.CONNECT_QUICKCONNECT, () => new CONNECT_QuickConnect()],
      [
        AWS_ResourceType.CONNECT_ROUTINGPROFILE,
        () => new CONNECT_RoutingProfile(),
      ],
      [
        AWS_ResourceType.CONNECT_SECURITYPROFILE,
        () => new CONNECT_SecurityProfile(),
      ],
      [AWS_ResourceType.CONNECT_USER, () => new CONNECT_User()],
      [
        AWS_ResourceType.CONNECT_USERHIERARCHYGROUP,
        () => new CONNECT_UserHierarchyGroup(),
      ],
      [
        AWS_ResourceType.CONNECT_USERHIERARCHYSTRUCTURE,
        () => new CONNECT_UserHierarchyStructure(),
      ],
      [AWS_ResourceType.CONNECT_VOCABULARY, () => new CONNECT_Vocabulary()],
      [
        AWS_ResourceType.CONTROLTOWER_CONTROLTOWERCONTROL,
        () => new CONTROLTOWER_ControlTowerControl(),
      ],
      [
        AWS_ResourceType.CONTROLTOWER_LANDINGZONE,
        () => new CONTROLTOWER_LandingZone(),
      ],
      [
        AWS_ResourceType.COSTEXPLORER_ANOMALYMONITOR,
        () => new COSTEXPLORER_AnomalyMonitor(),
      ],
      [
        AWS_ResourceType.COSTEXPLORER_ANOMALYSUBSCRIPTION,
        () => new COSTEXPLORER_AnomalySubscription(),
      ],
      [
        AWS_ResourceType.COSTEXPLORER_COSTALLOCATIONTAG,
        () => new COSTEXPLORER_CostAllocationTag(),
      ],
      [
        AWS_ResourceType.COSTEXPLORER_COSTCATEGORY,
        () => new COSTEXPLORER_CostCategory(),
      ],
      [AWS_ResourceType.CUR_REPORTDEFINITION, () => new CUR_ReportDefinition()],
      [
        AWS_ResourceType.CUSTOMERPROFILES_DOMAIN,
        () => new CUSTOMERPROFILES_Domain(),
      ],
      [
        AWS_ResourceType.CUSTOMERPROFILES_PROFILE,
        () => new CUSTOMERPROFILES_Profile(),
      ],
      [AWS_ResourceType.DATAEXCHANGE_DATASET, () => new DATAEXCHANGE_DataSet()],
      [
        AWS_ResourceType.DATAEXCHANGE_REVISION,
        () => new DATAEXCHANGE_Revision(),
      ],
      [
        AWS_ResourceType.DATAPIPELINE_PIPELINE,
        () => new DATAPIPELINE_Pipeline(),
      ],
      [
        AWS_ResourceType.DATAPIPELINE_PIPELINEDEFINITION,
        () => new DATAPIPELINE_PipelineDefinition(),
      ],
      [AWS_ResourceType.DATASYNC_AGENT, () => new DATASYNC_Agent()],
      [AWS_ResourceType.DATASYNC_EFSLOCATION, () => new DATASYNC_EfsLocation()],
      [
        AWS_ResourceType.DATASYNC_FSXOPENZFSFILESYSTEM,
        () => new DATASYNC_FsxOpenZfsFileSystem(),
      ],
      [
        AWS_ResourceType.DATASYNC_LOCATIONAZUREBLOB,
        () => new DATASYNC_LocationAzureBlob(),
      ],
      [
        AWS_ResourceType.DATASYNC_LOCATIONFSXLUSTRE,
        () => new DATASYNC_LocationFsxLustre(),
      ],
      [
        AWS_ResourceType.DATASYNC_LOCATIONFSXONTAPFILESYSTEM,
        () => new DATASYNC_LocationFsxOntapFileSystem(),
      ],
      [
        AWS_ResourceType.DATASYNC_LOCATIONFSXWINDOWS,
        () => new DATASYNC_LocationFsxWindows(),
      ],
      [
        AWS_ResourceType.DATASYNC_LOCATIONHDFS,
        () => new DATASYNC_LocationHdfs(),
      ],
      [
        AWS_ResourceType.DATASYNC_LOCATIONOBJECTSTORAGE,
        () => new DATASYNC_LocationObjectStorage(),
      ],
      [AWS_ResourceType.DATASYNC_LOCATIONSMB, () => new DATASYNC_LocationSmb()],
      [AWS_ResourceType.DATASYNC_NFSLOCATION, () => new DATASYNC_NfsLocation()],
      [AWS_ResourceType.DATASYNC_S3LOCATION, () => new DATASYNC_S3Location()],
      [AWS_ResourceType.DATASYNC_TASK, () => new DATASYNC_Task()],
      [AWS_ResourceType.DAX_CLUSTER, () => new DAX_Cluster()],
      [AWS_ResourceType.DAX_PARAMETERGROUP, () => new DAX_ParameterGroup()],
      [AWS_ResourceType.DAX_SUBNETGROUP, () => new DAX_SubnetGroup()],
      [AWS_ResourceType.DETECTIVE_GRAPH, () => new DETECTIVE_Graph()],
      [
        AWS_ResourceType.DETECTIVE_INVITATIONACCEPTER,
        () => new DETECTIVE_InvitationAccepter(),
      ],
      [AWS_ResourceType.DETECTIVE_MEMBER, () => new DETECTIVE_Member()],
      [
        AWS_ResourceType.DETECTIVE_ORGANIZATIONADMINACCOUNT,
        () => new DETECTIVE_OrganizationAdminAccount(),
      ],
      [
        AWS_ResourceType.DETECTIVE_ORGANIZATIONCONFIGURATION,
        () => new DETECTIVE_OrganizationConfiguration(),
      ],
      [
        AWS_ResourceType.DEVICEFARM_DEVICEPOOL,
        () => new DEVICEFARM_DevicePool(),
      ],
      [
        AWS_ResourceType.DEVICEFARM_INSTANCEPROFILE,
        () => new DEVICEFARM_InstanceProfile(),
      ],
      [
        AWS_ResourceType.DEVICEFARM_NETWORKPROFILE,
        () => new DEVICEFARM_NetworkProfile(),
      ],
      [AWS_ResourceType.DEVICEFARM_PROJECT, () => new DEVICEFARM_Project()],
      [
        AWS_ResourceType.DEVICEFARM_TESTGRIDPROJECT,
        () => new DEVICEFARM_TestGridProject(),
      ],
      [AWS_ResourceType.DEVICEFARM_UPLOAD, () => new DEVICEFARM_Upload()],
      [
        AWS_ResourceType.DIRECTCONNECT_BGPPEER,
        () => new DIRECTCONNECT_BgpPeer(),
      ],
      [
        AWS_ResourceType.DIRECTCONNECT_CONNECTION,
        () => new DIRECTCONNECT_Connection(),
      ],
      [
        AWS_ResourceType.DIRECTCONNECT_CONNECTIONASSOCIATION,
        () => new DIRECTCONNECT_ConnectionAssociation(),
      ],
      [
        AWS_ResourceType.DIRECTCONNECT_CONNECTIONCONFIRMATION,
        () => new DIRECTCONNECT_ConnectionConfirmation(),
      ],
      [
        AWS_ResourceType.DIRECTCONNECT_GATEWAY,
        () => new DIRECTCONNECT_Gateway(),
      ],
      [
        AWS_ResourceType.DIRECTCONNECT_GATEWAYASSOCIATION,
        () => new DIRECTCONNECT_GatewayAssociation(),
      ],
      [
        AWS_ResourceType.DIRECTCONNECT_GATEWAYASSOCIATIONPROPOSAL,
        () => new DIRECTCONNECT_GatewayAssociationProposal(),
      ],
      [
        AWS_ResourceType.DIRECTCONNECT_HOSTEDCONNECTION,
        () => new DIRECTCONNECT_HostedConnection(),
      ],
      [
        AWS_ResourceType.DIRECTCONNECT_HOSTEDPRIVATEVIRTUALINTERFACE,
        () => new DIRECTCONNECT_HostedPrivateVirtualInterface(),
      ],
      [
        AWS_ResourceType.DIRECTCONNECT_HOSTEDPRIVATEVIRTUALINTERFACEACCEPTER,
        () => new DIRECTCONNECT_HostedPrivateVirtualInterfaceAccepter(),
      ],
      [
        AWS_ResourceType.DIRECTCONNECT_HOSTEDPUBLICVIRTUALINTERFACE,
        () => new DIRECTCONNECT_HostedPublicVirtualInterface(),
      ],
      [
        AWS_ResourceType.DIRECTCONNECT_HOSTEDPUBLICVIRTUALINTERFACEACCEPTER,
        () => new DIRECTCONNECT_HostedPublicVirtualInterfaceAccepter(),
      ],
      [
        AWS_ResourceType.DIRECTCONNECT_HOSTEDTRANSITVIRTUALINTERFACE,
        () => new DIRECTCONNECT_HostedTransitVirtualInterface(),
      ],
      [
        AWS_ResourceType.DIRECTCONNECT_HOSTEDTRANSITVIRTUALINTERFACEACCEPTOR,
        () => new DIRECTCONNECT_HostedTransitVirtualInterfaceAcceptor(),
      ],
      [
        AWS_ResourceType.DIRECTCONNECT_LINKAGGREGATIONGROUP,
        () => new DIRECTCONNECT_LinkAggregationGroup(),
      ],
      [
        AWS_ResourceType.DIRECTCONNECT_MACSECKEYASSOCIATION,
        () => new DIRECTCONNECT_MacsecKeyAssociation(),
      ],
      [
        AWS_ResourceType.DIRECTCONNECT_PRIVATEVIRTUALINTERFACE,
        () => new DIRECTCONNECT_PrivateVirtualInterface(),
      ],
      [
        AWS_ResourceType.DIRECTCONNECT_PUBLICVIRTUALINTERFACE,
        () => new DIRECTCONNECT_PublicVirtualInterface(),
      ],
      [
        AWS_ResourceType.DIRECTCONNECT_TRANSITVIRTUALINTERFACE,
        () => new DIRECTCONNECT_TransitVirtualInterface(),
      ],
      [
        AWS_ResourceType.DIRECTORYSERVICE_CONDITIONALFORWADER,
        () => new DIRECTORYSERVICE_ConditionalForwader(),
      ],
      [
        AWS_ResourceType.DIRECTORYSERVICE_DIRECTORY,
        () => new DIRECTORYSERVICE_Directory(),
      ],
      [
        AWS_ResourceType.DIRECTORYSERVICE_LOGSERVICE,
        () => new DIRECTORYSERVICE_LogService(),
      ],
      [
        AWS_ResourceType.DIRECTORYSERVICE_RADIUSSETTINGS,
        () => new DIRECTORYSERVICE_RadiusSettings(),
      ],
      [
        AWS_ResourceType.DIRECTORYSERVICE_SERVICEREGION,
        () => new DIRECTORYSERVICE_ServiceRegion(),
      ],
      [
        AWS_ResourceType.DIRECTORYSERVICE_SHAREDDIRECTORY,
        () => new DIRECTORYSERVICE_SharedDirectory(),
      ],
      [
        AWS_ResourceType.DIRECTORYSERVICE_SHAREDDIRECTORYACCEPTER,
        () => new DIRECTORYSERVICE_SharedDirectoryAccepter(),
      ],
      [
        AWS_ResourceType.DIRECTORYSERVICE_TRUST,
        () => new DIRECTORYSERVICE_Trust(),
      ],
      [AWS_ResourceType.DLM_LIFECYCLEPOLICY, () => new DLM_LifecyclePolicy()],
      [AWS_ResourceType.DMS_CERTIFICATE, () => new DMS_Certificate()],
      [AWS_ResourceType.DMS_ENDPOINT, () => new DMS_Endpoint()],
      [
        AWS_ResourceType.DMS_EVENTSUBSCRIPTION,
        () => new DMS_EventSubscription(),
      ],
      [
        AWS_ResourceType.DMS_REPLICATIONCONFIG,
        () => new DMS_ReplicationConfig(),
      ],
      [
        AWS_ResourceType.DMS_REPLICATIONINSTANCE,
        () => new DMS_ReplicationInstance(),
      ],
      [
        AWS_ResourceType.DMS_REPLICATIONSUBNETGROUP,
        () => new DMS_ReplicationSubnetGroup(),
      ],
      [AWS_ResourceType.DMS_REPLICATIONTASK, () => new DMS_ReplicationTask()],
      [AWS_ResourceType.DMS_S3ENDPOINT, () => new DMS_S3Endpoint()],
      [AWS_ResourceType.DOCDB_CLUSTER, () => new DOCDB_Cluster()],
      [
        AWS_ResourceType.DOCDB_CLUSTERINSTANCE,
        () => new DOCDB_ClusterInstance(),
      ],
      [
        AWS_ResourceType.DOCDB_CLUSTERPARAMETERGROUP,
        () => new DOCDB_ClusterParameterGroup(),
      ],
      [
        AWS_ResourceType.DOCDB_CLUSTERSNAPSHOT,
        () => new DOCDB_ClusterSnapshot(),
      ],
      [AWS_ResourceType.DOCDB_ELASTICCLUSTER, () => new DOCDB_ElasticCluster()],
      [
        AWS_ResourceType.DOCDB_EVENTSUBSCRIPTION,
        () => new DOCDB_EventSubscription(),
      ],
      [AWS_ResourceType.DOCDB_GLOBALCLUSTER, () => new DOCDB_GlobalCluster()],
      [AWS_ResourceType.DOCDB_SUBNETGROUP, () => new DOCDB_SubnetGroup()],
      [
        AWS_ResourceType.DYNAMODB_CONTRIBUTORINSIGHTS,
        () => new DYNAMODB_ContributorInsights(),
      ],
      [AWS_ResourceType.DYNAMODB_GLOBALTABLE, () => new DYNAMODB_GlobalTable()],
      [
        AWS_ResourceType.DYNAMODB_KINESISSTREAMINGDESTINATION,
        () => new DYNAMODB_KinesisStreamingDestination(),
      ],
      [AWS_ResourceType.DYNAMODB_TABLE, () => new DYNAMODB_Table()],
      [AWS_ResourceType.DYNAMODB_TABLEITEM, () => new DYNAMODB_TableItem()],
      [
        AWS_ResourceType.DYNAMODB_TABLEREPLICA,
        () => new DYNAMODB_TableReplica(),
      ],
      [AWS_ResourceType.DYNAMODB_TAG, () => new DYNAMODB_Tag()],
      [AWS_ResourceType.EBS_DEFAULTKMSKEY, () => new EBS_DefaultKmsKey()],
      [
        AWS_ResourceType.EBS_ENCRYPTIONBYDEFAULT,
        () => new EBS_EncryptionByDefault(),
      ],
      [
        AWS_ResourceType.EBS_FASTSNAPSHOTRESTORE,
        () => new EBS_FastSnapshotRestore(),
      ],
      [AWS_ResourceType.EBS_SNAPSHOT, () => new EBS_Snapshot()],
      [AWS_ResourceType.EBS_SNAPSHOTCOPY, () => new EBS_SnapshotCopy()],
      [AWS_ResourceType.EBS_SNAPSHOTIMPORT, () => new EBS_SnapshotImport()],
      [AWS_ResourceType.EBS_VOLUME, () => new EBS_Volume()],
      [AWS_ResourceType.EC2_AMI, () => new EC2_Ami()],
      [AWS_ResourceType.EC2_AMICOPY, () => new EC2_AmiCopy()],
      [AWS_ResourceType.EC2_AMIFROMINSTANCE, () => new EC2_AmiFromInstance()],
      [
        AWS_ResourceType.EC2_AMILAUNCHPERMISSION,
        () => new EC2_AmiLaunchPermission(),
      ],
      [
        AWS_ResourceType.EC2_AVAILABILITYZONEGROUP,
        () => new EC2_AvailabilityZoneGroup(),
      ],
      [
        AWS_ResourceType.EC2_CAPACITYRESERVATION,
        () => new EC2_CapacityReservation(),
      ],
      [AWS_ResourceType.EC2_CARRIERGATEWAY, () => new EC2_CarrierGateway()],
      [AWS_ResourceType.EC2_CUSTOMERGATEWAY, () => new EC2_CustomerGateway()],
      [AWS_ResourceType.EC2_DEDICATEDHOST, () => new EC2_DedicatedHost()],
      [
        AWS_ResourceType.EC2_DEFAULTNETWORKACL,
        () => new EC2_DefaultNetworkAcl(),
      ],
      [
        AWS_ResourceType.EC2_DEFAULTROUTETABLE,
        () => new EC2_DefaultRouteTable(),
      ],
      [
        AWS_ResourceType.EC2_DEFAULTSECURITYGROUP,
        () => new EC2_DefaultSecurityGroup(),
      ],
      [AWS_ResourceType.EC2_DEFAULTSUBNET, () => new EC2_DefaultSubnet()],
      [AWS_ResourceType.EC2_DEFAULTVPC, () => new EC2_DefaultVpc()],
      [
        AWS_ResourceType.EC2_DEFAULTVPCDHCPOPTIONS,
        () => new EC2_DefaultVpcDhcpOptions(),
      ],
      [
        AWS_ResourceType.EC2_EGRESSONLYINTERNETGATEWAY,
        () => new EC2_EgressOnlyInternetGateway(),
      ],
      [AWS_ResourceType.EC2_EIP, () => new EC2_Eip()],
      [AWS_ResourceType.EC2_EIPASSOCIATION, () => new EC2_EipAssociation()],
      [AWS_ResourceType.EC2_FLEET, () => new EC2_Fleet()],
      [AWS_ResourceType.EC2_FLOWLOG, () => new EC2_FlowLog()],
      [
        AWS_ResourceType.EC2_IMAGEBLOCKPUBLICACCESS,
        () => new EC2_ImageBlockPublicAccess(),
      ],
      [AWS_ResourceType.EC2_INSTANCE, () => new EC2_Instance()],
      [AWS_ResourceType.EC2_INTERNETGATEWAY, () => new EC2_InternetGateway()],
      [
        AWS_ResourceType.EC2_INTERNETGATEWAYATTACHMENT,
        () => new EC2_InternetGatewayAttachment(),
      ],
      [AWS_ResourceType.EC2_KEYPAIR, () => new EC2_KeyPair()],
      [
        AWS_ResourceType.EC2_LAUNCHCONFIGURATION,
        () => new EC2_LaunchConfiguration(),
      ],
      [AWS_ResourceType.EC2_LAUNCHTEMPLATE, () => new EC2_LaunchTemplate()],
      [
        AWS_ResourceType.EC2_LOCALGATEWAYROUTE,
        () => new EC2_LocalGatewayRoute(),
      ],
      [
        AWS_ResourceType.EC2_LOCALGATEWAYROUTETABLEVPCASSOCIATION,
        () => new EC2_LocalGatewayRouteTableVpcAssociation(),
      ],
      [
        AWS_ResourceType.EC2_MAINROUTETABLEASSOCIATION,
        () => new EC2_MainRouteTableAssociation(),
      ],
      [
        AWS_ResourceType.EC2_MANAGEDPREFIXLIST,
        () => new EC2_ManagedPrefixList(),
      ],
      [
        AWS_ResourceType.EC2_MANAGEDPREFIXLISTENTRY,
        () => new EC2_ManagedPrefixListEntry(),
      ],
      [AWS_ResourceType.EC2_NATGATEWAY, () => new EC2_NatGateway()],
      [AWS_ResourceType.EC2_NETWORKACL, () => new EC2_NetworkAcl()],
      [
        AWS_ResourceType.EC2_NETWORKACLASSOCIATION,
        () => new EC2_NetworkAclAssociation(),
      ],
      [AWS_ResourceType.EC2_NETWORKACLRULE, () => new EC2_NetworkAclRule()],
      [
        AWS_ResourceType.EC2_NETWORKINSIGHTSANALYSIS,
        () => new EC2_NetworkInsightsAnalysis(),
      ],
      [
        AWS_ResourceType.EC2_NETWORKINSIGHTSPATH,
        () => new EC2_NetworkInsightsPath(),
      ],
      [AWS_ResourceType.EC2_NETWORKINTERFACE, () => new EC2_NetworkInterface()],
      [
        AWS_ResourceType.EC2_NETWORKINTERFACEATTACHMENT,
        () => new EC2_NetworkInterfaceAttachment(),
      ],
      [
        AWS_ResourceType.EC2_NETWORKINTERFACESECURITYGROUPATTACHMENT,
        () => new EC2_NetworkInterfaceSecurityGroupAttachment(),
      ],
      [
        AWS_ResourceType.EC2_PEERINGCONNECTIONOPTIONS,
        () => new EC2_PeeringConnectionOptions(),
      ],
      [AWS_ResourceType.EC2_PLACEMENTGROUP, () => new EC2_PlacementGroup()],
      [
        AWS_ResourceType.EC2_PROXYPROTOCOLPOLICY,
        () => new EC2_ProxyProtocolPolicy(),
      ],
      [AWS_ResourceType.EC2_ROUTE, () => new EC2_Route()],
      [AWS_ResourceType.EC2_ROUTETABLE, () => new EC2_RouteTable()],
      [
        AWS_ResourceType.EC2_ROUTETABLEASSOCIATION,
        () => new EC2_RouteTableAssociation(),
      ],
      [AWS_ResourceType.EC2_SECURITYGROUP, () => new EC2_SecurityGroup()],
      [
        AWS_ResourceType.EC2_SECURITYGROUPASSOCIATION,
        () => new EC2_SecurityGroupAssociation(),
      ],
      [
        AWS_ResourceType.EC2_SECURITYGROUPRULE,
        () => new EC2_SecurityGroupRule(),
      ],
      [
        AWS_ResourceType.EC2_SERIALCONSOLEACCESS,
        () => new EC2_SerialConsoleAccess(),
      ],
      [
        AWS_ResourceType.EC2_SNAPSHOTCREATEVOLUMEPERMISSION,
        () => new EC2_SnapshotCreateVolumePermission(),
      ],
      [
        AWS_ResourceType.EC2_SPOTDATAFEEDSUBSCRIPTION,
        () => new EC2_SpotDatafeedSubscription(),
      ],
      [AWS_ResourceType.EC2_SPOTFLEETREQUEST, () => new EC2_SpotFleetRequest()],
      [
        AWS_ResourceType.EC2_SPOTINSTANCEREQUEST,
        () => new EC2_SpotInstanceRequest(),
      ],
      [AWS_ResourceType.EC2_SUBNET, () => new EC2_Subnet()],
      [
        AWS_ResourceType.EC2_SUBNETCIDRRESERVATION,
        () => new EC2_SubnetCidrReservation(),
      ],
      [AWS_ResourceType.EC2_TAG, () => new EC2_Tag()],
      [
        AWS_ResourceType.EC2_TRAFFICMIRRORFILTER,
        () => new EC2_TrafficMirrorFilter(),
      ],
      [
        AWS_ResourceType.EC2_TRAFFICMIRRORFILTERRULE,
        () => new EC2_TrafficMirrorFilterRule(),
      ],
      [
        AWS_ResourceType.EC2_TRAFFICMIRRORSESSION,
        () => new EC2_TrafficMirrorSession(),
      ],
      [
        AWS_ResourceType.EC2_TRAFFICMIRRORTARGET,
        () => new EC2_TrafficMirrorTarget(),
      ],
      [AWS_ResourceType.EC2_VOLUMEATTACHMENT, () => new EC2_VolumeAttachment()],
      [AWS_ResourceType.EC2_VPC, () => new EC2_Vpc()],
      [AWS_ResourceType.EC2_VPCDHCPOPTIONS, () => new EC2_VpcDhcpOptions()],
      [
        AWS_ResourceType.EC2_VPCDHCPOPTIONSASSOCIATION,
        () => new EC2_VpcDhcpOptionsAssociation(),
      ],
      [AWS_ResourceType.EC2_VPCENDPOINT, () => new EC2_VpcEndpoint()],
      [
        AWS_ResourceType.EC2_VPCENDPOINTCONNECTIONACCEPTER,
        () => new EC2_VpcEndpointConnectionAccepter(),
      ],
      [
        AWS_ResourceType.EC2_VPCENDPOINTCONNECTIONNOTIFICATION,
        () => new EC2_VpcEndpointConnectionNotification(),
      ],
      [
        AWS_ResourceType.EC2_VPCENDPOINTPOLICY,
        () => new EC2_VpcEndpointPolicy(),
      ],
      [
        AWS_ResourceType.EC2_VPCENDPOINTROUTETABLEASSOCIATION,
        () => new EC2_VpcEndpointRouteTableAssociation(),
      ],
      [
        AWS_ResourceType.EC2_VPCENDPOINTSERVICE,
        () => new EC2_VpcEndpointService(),
      ],
      [
        AWS_ResourceType.EC2_VPCENDPOINTSERVICEALLOWEDPRINCIPLE,
        () => new EC2_VpcEndpointServiceAllowedPrinciple(),
      ],
      [
        AWS_ResourceType.EC2_VPCENDPOINTSUBNETASSOCIATION,
        () => new EC2_VpcEndpointSubnetAssociation(),
      ],
      [AWS_ResourceType.EC2_VPCIPAM, () => new EC2_VpcIpam()],
      [
        AWS_ResourceType.EC2_VPCIPAMORGANIZATIONADMINACCOUNT,
        () => new EC2_VpcIpamOrganizationAdminAccount(),
      ],
      [AWS_ResourceType.EC2_VPCIPAMPOOL, () => new EC2_VpcIpamPool()],
      [AWS_ResourceType.EC2_VPCIPAMPOOLCIDR, () => new EC2_VpcIpamPoolCidr()],
      [
        AWS_ResourceType.EC2_VPCIPAMPOOLCIDRALLOCATION,
        () => new EC2_VpcIpamPoolCidrAllocation(),
      ],
      [
        AWS_ResourceType.EC2_VPCIPAMPREVIEWNEXTCIDR,
        () => new EC2_VpcIpamPreviewNextCidr(),
      ],
      [
        AWS_ResourceType.EC2_VPCIPAMRESOURCEDISCOVERY,
        () => new EC2_VpcIpamResourceDiscovery(),
      ],
      [
        AWS_ResourceType.EC2_VPCIPAMRESOURCEDISCOVERYASSOCIATION,
        () => new EC2_VpcIpamResourceDiscoveryAssociation(),
      ],
      [AWS_ResourceType.EC2_VPCIPAMSCOPE, () => new EC2_VpcIpamScope()],
      [
        AWS_ResourceType.EC2_VPCIPV4CIDRBLOCKASSOCIATION,
        () => new EC2_VpcIpv4CidrBlockAssociation(),
      ],
      [
        AWS_ResourceType.EC2_VPCIPV6CIDRBLOCKASSOCIATION,
        () => new EC2_VpcIpv6CidrBlockAssociation(),
      ],
      [
        AWS_ResourceType.EC2_VPCNETWORKPERFORMANCEMETRICSUBSCRIPTION,
        () => new EC2_VpcNetworkPerformanceMetricSubscription(),
      ],
      [
        AWS_ResourceType.EC2_VPCPEERINGCONNECTION,
        () => new EC2_VpcPeeringConnection(),
      ],
      [
        AWS_ResourceType.EC2_VPCPEERINGCONNECTIONACCEPTER,
        () => new EC2_VpcPeeringConnectionAccepter(),
      ],
      [AWS_ResourceType.EC2_VPNCONNECTION, () => new EC2_VpnConnection()],
      [
        AWS_ResourceType.EC2_VPNCONNECTIONROUTE,
        () => new EC2_VpnConnectionRoute(),
      ],
      [AWS_ResourceType.EC2_VPNGATEWAY, () => new EC2_VpnGateway()],
      [
        AWS_ResourceType.EC2_VPNGATEWAYATTACHMENT,
        () => new EC2_VpnGatewayAttachment(),
      ],
      [
        AWS_ResourceType.EC2_VPNGATEWAYROUTEPROPAGATION,
        () => new EC2_VpnGatewayRoutePropagation(),
      ],
      [
        AWS_ResourceType.EC2CLIENTVPN_AUTHORIZATIONRULE,
        () => new EC2CLIENTVPN_AuthorizationRule(),
      ],
      [
        AWS_ResourceType.EC2CLIENTVPN_ENDPOINT,
        () => new EC2CLIENTVPN_Endpoint(),
      ],
      [
        AWS_ResourceType.EC2CLIENTVPN_NETWORKASSOCIATION,
        () => new EC2CLIENTVPN_NetworkAssociation(),
      ],
      [AWS_ResourceType.EC2CLIENTVPN_ROUTE, () => new EC2CLIENTVPN_Route()],
      [
        AWS_ResourceType.EC2TRANSITGATEWAY_CONNECT,
        () => new EC2TRANSITGATEWAY_Connect(),
      ],
      [
        AWS_ResourceType.EC2TRANSITGATEWAY_CONNECTPEER,
        () => new EC2TRANSITGATEWAY_ConnectPeer(),
      ],
      [
        AWS_ResourceType.EC2TRANSITGATEWAY_INSTANCECONNECTENDPOINT,
        () => new EC2TRANSITGATEWAY_InstanceConnectEndpoint(),
      ],
      [
        AWS_ResourceType.EC2TRANSITGATEWAY_INSTANCESTATE,
        () => new EC2TRANSITGATEWAY_InstanceState(),
      ],
      [
        AWS_ResourceType.EC2TRANSITGATEWAY_MULTICASTDOMAIN,
        () => new EC2TRANSITGATEWAY_MulticastDomain(),
      ],
      [
        AWS_ResourceType.EC2TRANSITGATEWAY_MULTICASTDOMAINASSOCIATION,
        () => new EC2TRANSITGATEWAY_MulticastDomainAssociation(),
      ],
      [
        AWS_ResourceType.EC2TRANSITGATEWAY_MULTICASTGROUPMEMBER,
        () => new EC2TRANSITGATEWAY_MulticastGroupMember(),
      ],
      [
        AWS_ResourceType.EC2TRANSITGATEWAY_MULTICASTGROUPSOURCE,
        () => new EC2TRANSITGATEWAY_MulticastGroupSource(),
      ],
      [
        AWS_ResourceType.EC2TRANSITGATEWAY_PEERINGATTACHMENT,
        () => new EC2TRANSITGATEWAY_PeeringAttachment(),
      ],
      [
        AWS_ResourceType.EC2TRANSITGATEWAY_PEERINGATTACHMENTACCEPTER,
        () => new EC2TRANSITGATEWAY_PeeringAttachmentAccepter(),
      ],
      [
        AWS_ResourceType.EC2TRANSITGATEWAY_POLICYTABLE,
        () => new EC2TRANSITGATEWAY_PolicyTable(),
      ],
      [
        AWS_ResourceType.EC2TRANSITGATEWAY_POLICYTABLEASSOCIATION,
        () => new EC2TRANSITGATEWAY_PolicyTableAssociation(),
      ],
      [
        AWS_ResourceType.EC2TRANSITGATEWAY_PREFIXLISTREFERENCE,
        () => new EC2TRANSITGATEWAY_PrefixListReference(),
      ],
      [
        AWS_ResourceType.EC2TRANSITGATEWAY_ROUTE,
        () => new EC2TRANSITGATEWAY_Route(),
      ],
      [
        AWS_ResourceType.EC2TRANSITGATEWAY_ROUTETABLE,
        () => new EC2TRANSITGATEWAY_RouteTable(),
      ],
      [
        AWS_ResourceType.EC2TRANSITGATEWAY_ROUTETABLEASSOCIATION,
        () => new EC2TRANSITGATEWAY_RouteTableAssociation(),
      ],
      [
        AWS_ResourceType.EC2TRANSITGATEWAY_ROUTETABLEPROPAGATION,
        () => new EC2TRANSITGATEWAY_RouteTablePropagation(),
      ],
      [
        AWS_ResourceType.EC2TRANSITGATEWAY_TRANSITGATEWAY,
        () => new EC2TRANSITGATEWAY_TransitGateway(),
      ],
      [
        AWS_ResourceType.EC2TRANSITGATEWAY_VPCATTACHMENT,
        () => new EC2TRANSITGATEWAY_VpcAttachment(),
      ],
      [
        AWS_ResourceType.EC2TRANSITGATEWAY_VPCATTACHMENTACCEPTER,
        () => new EC2TRANSITGATEWAY_VpcAttachmentAccepter(),
      ],
      [AWS_ResourceType.ECR_LIFECYCLEPOLICY, () => new ECR_LifecyclePolicy()],
      [
        AWS_ResourceType.ECR_PULLTHROUGHCACHERULE,
        () => new ECR_PullThroughCacheRule(),
      ],
      [AWS_ResourceType.ECR_REGISTRYPOLICY, () => new ECR_RegistryPolicy()],
      [
        AWS_ResourceType.ECR_REGISTRYSCANNINGCONFIGURATION,
        () => new ECR_RegistryScanningConfiguration(),
      ],
      [
        AWS_ResourceType.ECR_REPLICATIONCONFIGURATION,
        () => new ECR_ReplicationConfiguration(),
      ],
      [AWS_ResourceType.ECR_REPOSITORY, () => new ECR_Repository()],
      [AWS_ResourceType.ECR_REPOSITORYPOLICY, () => new ECR_RepositoryPolicy()],
      [AWS_ResourceType.ECRPUBLIC_REPOSITORY, () => new ECRPUBLIC_Repository()],
      [
        AWS_ResourceType.ECRPUBLIC_REPOSITORYPOLICY,
        () => new ECRPUBLIC_RepositoryPolicy(),
      ],
      [
        AWS_ResourceType.ECS_ACCOUNTSETTINGDEFAULT,
        () => new ECS_AccountSettingDefault(),
      ],
      [AWS_ResourceType.ECS_CAPACITYPROVIDER, () => new ECS_CapacityProvider()],
      [AWS_ResourceType.ECS_CLUSTER, () => new ECS_Cluster()],
      [
        AWS_ResourceType.ECS_CLUSTERCAPACITYPROVIDERS,
        () => new ECS_ClusterCapacityProviders(),
      ],
      [AWS_ResourceType.ECS_SERVICE, () => new ECS_Service()],
      [AWS_ResourceType.ECS_TAG, () => new ECS_Tag()],
      [AWS_ResourceType.ECS_TASKDEFINITION, () => new ECS_TaskDefinition()],
      [AWS_ResourceType.ECS_TASKSET, () => new ECS_TaskSet()],
      [AWS_ResourceType.EFS_ACCESSPOINT, () => new EFS_AccessPoint()],
      [AWS_ResourceType.EFS_BACKUPPOLICY, () => new EFS_BackupPolicy()],
      [AWS_ResourceType.EFS_FILESYSTEM, () => new EFS_FileSystem()],
      [AWS_ResourceType.EFS_FILESYSTEMPOLICY, () => new EFS_FileSystemPolicy()],
      [AWS_ResourceType.EFS_MOUNTTARGET, () => new EFS_MountTarget()],
      [
        AWS_ResourceType.EFS_REPLICATIONCONFIGURATION,
        () => new EFS_ReplicationConfiguration(),
      ],
      [AWS_ResourceType.EKS_ACCESSENTRY, () => new EKS_AccessEntry()],
      [
        AWS_ResourceType.EKS_ACCESSPOLICYASSOCIATION,
        () => new EKS_AccessPolicyAssociation(),
      ],
      [AWS_ResourceType.EKS_ADDON, () => new EKS_Addon()],
      [AWS_ResourceType.EKS_CLUSTER, () => new EKS_Cluster()],
      [AWS_ResourceType.EKS_FARGATEPROFILE, () => new EKS_FargateProfile()],
      [
        AWS_ResourceType.EKS_IDENTITYPROVIDERCONFIG,
        () => new EKS_IdentityProviderConfig(),
      ],
      [AWS_ResourceType.EKS_NODEGROUP, () => new EKS_NodeGroup()],
      [
        AWS_ResourceType.EKS_PODIDENTITYASSOCIATION,
        () => new EKS_PodIdentityAssociation(),
      ],
      [AWS_ResourceType.ELASTICACHE_CLUSTER, () => new ELASTICACHE_Cluster()],
      [
        AWS_ResourceType.ELASTICACHE_GLOBALREPLICATIONGROUP,
        () => new ELASTICACHE_GlobalReplicationGroup(),
      ],
      [
        AWS_ResourceType.ELASTICACHE_PARAMETERGROUP,
        () => new ELASTICACHE_ParameterGroup(),
      ],
      [
        AWS_ResourceType.ELASTICACHE_REPLICATIONGROUP,
        () => new ELASTICACHE_ReplicationGroup(),
      ],
      [
        AWS_ResourceType.ELASTICACHE_SERVERLESSCACHE,
        () => new ELASTICACHE_ServerlessCache(),
      ],
      [
        AWS_ResourceType.ELASTICACHE_SUBNETGROUP,
        () => new ELASTICACHE_SubnetGroup(),
      ],
      [AWS_ResourceType.ELASTICACHE_USER, () => new ELASTICACHE_User()],
      [
        AWS_ResourceType.ELASTICACHE_USERGROUP,
        () => new ELASTICACHE_UserGroup(),
      ],
      [
        AWS_ResourceType.ELASTICACHE_USERGROUPASSOCIATION,
        () => new ELASTICACHE_UserGroupAssociation(),
      ],
      [
        AWS_ResourceType.ELASTICBEANSTALK_APPLICATION,
        () => new ELASTICBEANSTALK_Application(),
      ],
      [
        AWS_ResourceType.ELASTICBEANSTALK_APPLICATIONVERSION,
        () => new ELASTICBEANSTALK_ApplicationVersion(),
      ],
      [
        AWS_ResourceType.ELASTICBEANSTALK_CONFIGURATIONTEMPLATE,
        () => new ELASTICBEANSTALK_ConfigurationTemplate(),
      ],
      [
        AWS_ResourceType.ELASTICBEANSTALK_ENVIRONMENT,
        () => new ELASTICBEANSTALK_Environment(),
      ],
      [AWS_ResourceType.ELASTICSEARCH_DOMAIN, () => new ELASTICSEARCH_Domain()],
      [
        AWS_ResourceType.ELASTICSEARCH_DOMAINPOLICY,
        () => new ELASTICSEARCH_DomainPolicy(),
      ],
      [
        AWS_ResourceType.ELASTICSEARCH_DOMAINSAMLOPTIONS,
        () => new ELASTICSEARCH_DomainSamlOptions(),
      ],
      [
        AWS_ResourceType.ELASTICSEARCH_VPCENDPOINT,
        () => new ELASTICSEARCH_VpcEndpoint(),
      ],
      [
        AWS_ResourceType.ELASTICTRANSCODER_PIPELINE,
        () => new ELASTICTRANSCODER_Pipeline(),
      ],
      [
        AWS_ResourceType.ELASTICTRANSCODER_PRESET,
        () => new ELASTICTRANSCODER_Preset(),
      ],
      [
        AWS_ResourceType.ELB_APPCOOKIESTICKINESSPOLICY,
        () => new ELB_AppCookieStickinessPolicy(),
      ],
      [AWS_ResourceType.ELB_ATTACHMENT, () => new ELB_Attachment()],
      [AWS_ResourceType.ELB_LISTENERPOLICY, () => new ELB_ListenerPolicy()],
      [AWS_ResourceType.ELB_LOADBALANCER, () => new ELB_LoadBalancer()],
      [
        AWS_ResourceType.ELB_LOADBALANCERBACKENDSERVERPOLICY,
        () => new ELB_LoadBalancerBackendServerPolicy(),
      ],
      [
        AWS_ResourceType.ELB_LOADBALANCERCOOKIESTICKINESSPOLICY,
        () => new ELB_LoadBalancerCookieStickinessPolicy(),
      ],
      [
        AWS_ResourceType.ELB_LOADBALANCERPOLICY,
        () => new ELB_LoadBalancerPolicy(),
      ],
      [
        AWS_ResourceType.ELB_SSLNEGOTIATIONPOLICY,
        () => new ELB_SslNegotiationPolicy(),
      ],
      [
        AWS_ResourceType.EMR_BLOCKPUBLICACCESSCONFIGURATION,
        () => new EMR_BlockPublicAccessConfiguration(),
      ],
      [AWS_ResourceType.EMR_CLUSTER, () => new EMR_Cluster()],
      [AWS_ResourceType.EMR_INSTANCEFLEET, () => new EMR_InstanceFleet()],
      [AWS_ResourceType.EMR_INSTANCEGROUP, () => new EMR_InstanceGroup()],
      [
        AWS_ResourceType.EMR_MANAGEDSCALINGPOLICY,
        () => new EMR_ManagedScalingPolicy(),
      ],
      [
        AWS_ResourceType.EMR_SECURITYCONFIGURATION,
        () => new EMR_SecurityConfiguration(),
      ],
      [AWS_ResourceType.EMR_STUDIO, () => new EMR_Studio()],
      [
        AWS_ResourceType.EMR_STUDIOSESSIONMAPPING,
        () => new EMR_StudioSessionMapping(),
      ],
      [
        AWS_ResourceType.EMRCONTAINERS_JOBTEMPLATE,
        () => new EMRCONTAINERS_JobTemplate(),
      ],
      [
        AWS_ResourceType.EMRCONTAINERS_VIRTUALCLUSTER,
        () => new EMRCONTAINERS_VirtualCluster(),
      ],
      [
        AWS_ResourceType.EMRSERVERLESS_APPLICATION,
        () => new EMRSERVERLESS_Application(),
      ],
      [AWS_ResourceType.EVIDENTLY_FEATURE, () => new EVIDENTLY_Feature()],
      [AWS_ResourceType.EVIDENTLY_LAUNCH, () => new EVIDENTLY_Launch()],
      [AWS_ResourceType.EVIDENTLY_PROJECT, () => new EVIDENTLY_Project()],
      [AWS_ResourceType.EVIDENTLY_SEGMENT, () => new EVIDENTLY_Segment()],
      [AWS_ResourceType.FINSPACE_KXCLUSTER, () => new FINSPACE_KxCluster()],
      [AWS_ResourceType.FINSPACE_KXDATABASE, () => new FINSPACE_KxDatabase()],
      [AWS_ResourceType.FINSPACE_KXDATAVIEW, () => new FINSPACE_KxDataview()],
      [
        AWS_ResourceType.FINSPACE_KXENVIRONMENT,
        () => new FINSPACE_KxEnvironment(),
      ],
      [
        AWS_ResourceType.FINSPACE_KXSCALINGGROUP,
        () => new FINSPACE_KxScalingGroup(),
      ],
      [AWS_ResourceType.FINSPACE_KXUSER, () => new FINSPACE_KxUser()],
      [AWS_ResourceType.FINSPACE_KXVOLUME, () => new FINSPACE_KxVolume()],
      [
        AWS_ResourceType.FIS_EXPERIMENTTEMPLATE,
        () => new FIS_ExperimentTemplate(),
      ],
      [AWS_ResourceType.FMS_ADMINACCOUNT, () => new FMS_AdminAccount()],
      [AWS_ResourceType.FMS_POLICY, () => new FMS_Policy()],
      [AWS_ResourceType.FSX_BACKUP, () => new FSX_Backup()],
      [
        AWS_ResourceType.FSX_DATAREPOSITORYASSOCIATION,
        () => new FSX_DataRepositoryAssociation(),
      ],
      [AWS_ResourceType.FSX_FILECACHE, () => new FSX_FileCache()],
      [AWS_ResourceType.FSX_LUSTREFILESYSTEM, () => new FSX_LustreFileSystem()],
      [AWS_ResourceType.FSX_ONTAPFILESYSTEM, () => new FSX_OntapFileSystem()],
      [
        AWS_ResourceType.FSX_ONTAPSTORAGEVIRTUALMACHINE,
        () => new FSX_OntapStorageVirtualMachine(),
      ],
      [AWS_ResourceType.FSX_ONTAPVOLUME, () => new FSX_OntapVolume()],
      [
        AWS_ResourceType.FSX_OPENZFSFILESYSTEM,
        () => new FSX_OpenZfsFileSystem(),
      ],
      [AWS_ResourceType.FSX_OPENZFSSNAPSHOT, () => new FSX_OpenZfsSnapshot()],
      [AWS_ResourceType.FSX_OPENZFSVOLUME, () => new FSX_OpenZfsVolume()],
      [
        AWS_ResourceType.FSX_WINDOWSFILESYSTEM,
        () => new FSX_WindowsFileSystem(),
      ],
      [AWS_ResourceType.GAMELIFT_ALIAS, () => new GAMELIFT_Alias()],
      [AWS_ResourceType.GAMELIFT_BUILD, () => new GAMELIFT_Build()],
      [AWS_ResourceType.GAMELIFT_FLEET, () => new GAMELIFT_Fleet()],
      [
        AWS_ResourceType.GAMELIFT_GAMESERVERGROUP,
        () => new GAMELIFT_GameServerGroup(),
      ],
      [
        AWS_ResourceType.GAMELIFT_GAMESESSIONQUEUE,
        () => new GAMELIFT_GameSessionQueue(),
      ],
      [
        AWS_ResourceType.GAMELIFT_MATCHMAKINGCONFIGURATION,
        () => new GAMELIFT_MatchmakingConfiguration(),
      ],
      [
        AWS_ResourceType.GAMELIFT_MATCHMAKINGRULESET,
        () => new GAMELIFT_MatchmakingRuleSet(),
      ],
      [AWS_ResourceType.GAMELIFT_SCRIPT, () => new GAMELIFT_Script()],
      [AWS_ResourceType.GLACIER_VAULT, () => new GLACIER_Vault()],
      [AWS_ResourceType.GLACIER_VAULTLOCK, () => new GLACIER_VaultLock()],
      [
        AWS_ResourceType.GLOBALACCELERATOR_ACCELERATOR,
        () => new GLOBALACCELERATOR_Accelerator(),
      ],
      [
        AWS_ResourceType.GLOBALACCELERATOR_CUSTOMROUTINGACCELERATOR,
        () => new GLOBALACCELERATOR_CustomRoutingAccelerator(),
      ],
      [
        AWS_ResourceType.GLOBALACCELERATOR_CUSTOMROUTINGENDPOINTGROUP,
        () => new GLOBALACCELERATOR_CustomRoutingEndpointGroup(),
      ],
      [
        AWS_ResourceType.GLOBALACCELERATOR_CUSTOMROUTINGLISTENER,
        () => new GLOBALACCELERATOR_CustomRoutingListener(),
      ],
      [
        AWS_ResourceType.GLOBALACCELERATOR_ENDPOINTGROUP,
        () => new GLOBALACCELERATOR_EndpointGroup(),
      ],
      [
        AWS_ResourceType.GLOBALACCELERATOR_LISTENER,
        () => new GLOBALACCELERATOR_Listener(),
      ],
      [AWS_ResourceType.GLUE_CATALOGDATABASE, () => new GLUE_CatalogDatabase()],
      [AWS_ResourceType.GLUE_CATALOGTABLE, () => new GLUE_CatalogTable()],
      [AWS_ResourceType.GLUE_CLASSIFIER, () => new GLUE_Classifier()],
      [AWS_ResourceType.GLUE_CONNECTION, () => new GLUE_Connection()],
      [AWS_ResourceType.GLUE_CRAWLER, () => new GLUE_Crawler()],
      [
        AWS_ResourceType.GLUE_DATACATALOGENCRYPTIONSETTINGS,
        () => new GLUE_DataCatalogEncryptionSettings(),
      ],
      [
        AWS_ResourceType.GLUE_DATAQUALITYRULESET,
        () => new GLUE_DataQualityRuleset(),
      ],
      [AWS_ResourceType.GLUE_DEVENDPOINT, () => new GLUE_DevEndpoint()],
      [AWS_ResourceType.GLUE_JOB, () => new GLUE_Job()],
      [AWS_ResourceType.GLUE_MLTRANSFORM, () => new GLUE_MLTransform()],
      [AWS_ResourceType.GLUE_PARTITION, () => new GLUE_Partition()],
      [AWS_ResourceType.GLUE_PARTITIONINDEX, () => new GLUE_PartitionIndex()],
      [AWS_ResourceType.GLUE_REGISTRY, () => new GLUE_Registry()],
      [AWS_ResourceType.GLUE_RESOURCEPOLICY, () => new GLUE_ResourcePolicy()],
      [AWS_ResourceType.GLUE_SCHEMA, () => new GLUE_Schema()],
      [
        AWS_ResourceType.GLUE_SECURITYCONFIGURATION,
        () => new GLUE_SecurityConfiguration(),
      ],
      [AWS_ResourceType.GLUE_TRIGGER, () => new GLUE_Trigger()],
      [
        AWS_ResourceType.GLUE_USERDEFINEDFUNCTION,
        () => new GLUE_UserDefinedFunction(),
      ],
      [AWS_ResourceType.GLUE_WORKFLOW, () => new GLUE_Workflow()],
      [
        AWS_ResourceType.GRAFANA_LICENSEASSOCIATION,
        () => new GRAFANA_LicenseAssociation(),
      ],
      [
        AWS_ResourceType.GRAFANA_ROLEASSOCIATION,
        () => new GRAFANA_RoleAssociation(),
      ],
      [AWS_ResourceType.GRAFANA_WORKSPACE, () => new GRAFANA_Workspace()],
      [
        AWS_ResourceType.GRAFANA_WORKSPACEAPIKEY,
        () => new GRAFANA_WorkspaceApiKey(),
      ],
      [
        AWS_ResourceType.GRAFANA_WORKSPACESAMLCONFIGURATION,
        () => new GRAFANA_WorkspaceSamlConfiguration(),
      ],
      [AWS_ResourceType.GUARDDUTY_DETECTOR, () => new GUARDDUTY_Detector()],
      [
        AWS_ResourceType.GUARDDUTY_DETECTORFEATURE,
        () => new GUARDDUTY_DetectorFeature(),
      ],
      [AWS_ResourceType.GUARDDUTY_FILTER, () => new GUARDDUTY_Filter()],
      [
        AWS_ResourceType.GUARDDUTY_INVITEACCEPTER,
        () => new GUARDDUTY_InviteAccepter(),
      ],
      [AWS_ResourceType.GUARDDUTY_IPSET, () => new GUARDDUTY_IPSet()],
      [AWS_ResourceType.GUARDDUTY_MEMBER, () => new GUARDDUTY_Member()],
      [
        AWS_ResourceType.GUARDDUTY_ORGANIZATIONADMINACCOUNT,
        () => new GUARDDUTY_OrganizationAdminAccount(),
      ],
      [
        AWS_ResourceType.GUARDDUTY_ORGANIZATIONCONFIGURATION,
        () => new GUARDDUTY_OrganizationConfiguration(),
      ],
      [
        AWS_ResourceType.GUARDDUTY_ORGANIZATIONCONFIGURATIONFEATURE,
        () => new GUARDDUTY_OrganizationConfigurationFeature(),
      ],
      [
        AWS_ResourceType.GUARDDUTY_PUBLISHINGDESTINATION,
        () => new GUARDDUTY_PublishingDestination(),
      ],
      [
        AWS_ResourceType.GUARDDUTY_THREATINTELSET,
        () => new GUARDDUTY_ThreatIntelSet(),
      ],
      [AWS_ResourceType.IAM_ACCESSKEY, () => new IAM_AccessKey()],
      [AWS_ResourceType.IAM_ACCOUNTALIAS, () => new IAM_AccountAlias()],
      [
        AWS_ResourceType.IAM_ACCOUNTPASSWORDPOLICY,
        () => new IAM_AccountPasswordPolicy(),
      ],
      [AWS_ResourceType.IAM_GROUP, () => new IAM_Group()],
      [AWS_ResourceType.IAM_GROUPMEMBERSHIP, () => new IAM_GroupMembership()],
      [AWS_ResourceType.IAM_GROUPPOLICY, () => new IAM_GroupPolicy()],
      [
        AWS_ResourceType.IAM_GROUPPOLICYATTACHMENT,
        () => new IAM_GroupPolicyAttachment(),
      ],
      [AWS_ResourceType.IAM_INSTANCEPROFILE, () => new IAM_InstanceProfile()],
      [
        AWS_ResourceType.IAM_OPENIDCONNECTPROVIDER,
        () => new IAM_OpenIdConnectProvider(),
      ],
      [AWS_ResourceType.IAM_POLICY, () => new IAM_Policy()],
      [AWS_ResourceType.IAM_POLICYATTACHMENT, () => new IAM_PolicyAttachment()],
      [AWS_ResourceType.IAM_ROLE, () => new IAM_Role()],
      [AWS_ResourceType.IAM_ROLEPOLICY, () => new IAM_RolePolicy()],
      [
        AWS_ResourceType.IAM_ROLEPOLICYATTACHMENT,
        () => new IAM_RolePolicyAttachment(),
      ],
      [AWS_ResourceType.IAM_SAMLPROVIDER, () => new IAM_SamlProvider()],
      [
        AWS_ResourceType.IAM_SECURITYTOKENSERVICEPREFERENCES,
        () => new IAM_SecurityTokenServicePreferences(),
      ],
      [
        AWS_ResourceType.IAM_SERVERCERTIFICATE,
        () => new IAM_ServerCertificate(),
      ],
      [
        AWS_ResourceType.IAM_SERVICELINKEDROLE,
        () => new IAM_ServiceLinkedRole(),
      ],
      [
        AWS_ResourceType.IAM_SERVICESPECIFICCREDENTIAL,
        () => new IAM_ServiceSpecificCredential(),
      ],
      [
        AWS_ResourceType.IAM_SIGNINGCERTIFICATE,
        () => new IAM_SigningCertificate(),
      ],
      [AWS_ResourceType.IAM_SSHKEY, () => new IAM_SshKey()],
      [AWS_ResourceType.IAM_USER, () => new IAM_User()],
      [
        AWS_ResourceType.IAM_USERGROUPMEMBERSHIP,
        () => new IAM_UserGroupMembership(),
      ],
      [AWS_ResourceType.IAM_USERLOGINPROFILE, () => new IAM_UserLoginProfile()],
      [AWS_ResourceType.IAM_USERPOLICY, () => new IAM_UserPolicy()],
      [
        AWS_ResourceType.IAM_USERPOLICYATTACHMENT,
        () => new IAM_UserPolicyAttachment(),
      ],
      [AWS_ResourceType.IAM_VIRTUALMFADEVICE, () => new IAM_VirtualMfaDevice()],
      [AWS_ResourceType.IDENTITYSTORE_GROUP, () => new IDENTITYSTORE_Group()],
      [
        AWS_ResourceType.IDENTITYSTORE_GROUPMEMBERSHIP,
        () => new IDENTITYSTORE_GroupMembership(),
      ],
      [AWS_ResourceType.IDENTITYSTORE_USER, () => new IDENTITYSTORE_User()],
      [
        AWS_ResourceType.IMAGEBUILDER_COMPONENT,
        () => new IMAGEBUILDER_Component(),
      ],
      [
        AWS_ResourceType.IMAGEBUILDER_CONTAINERRECIPE,
        () => new IMAGEBUILDER_ContainerRecipe(),
      ],
      [
        AWS_ResourceType.IMAGEBUILDER_DISTRIBUTIONCONFIGURATION,
        () => new IMAGEBUILDER_DistributionConfiguration(),
      ],
      [AWS_ResourceType.IMAGEBUILDER_IMAGE, () => new IMAGEBUILDER_Image()],
      [
        AWS_ResourceType.IMAGEBUILDER_IMAGEPIPELINE,
        () => new IMAGEBUILDER_ImagePipeline(),
      ],
      [
        AWS_ResourceType.IMAGEBUILDER_IMAGERECIPE,
        () => new IMAGEBUILDER_ImageRecipe(),
      ],
      [
        AWS_ResourceType.IMAGEBUILDER_INFRASTRUCTURECONFIGURATION,
        () => new IMAGEBUILDER_InfrastructureConfiguration(),
      ],
      [
        AWS_ResourceType.IMAGEBUILDER_WORKFLOW,
        () => new IMAGEBUILDER_Workflow(),
      ],
      [
        AWS_ResourceType.INSPECTOR_ASSESSMENTTARGET,
        () => new INSPECTOR_AssessmentTarget(),
      ],
      [
        AWS_ResourceType.INSPECTOR_ASSESSMENTTEMPLATE,
        () => new INSPECTOR_AssessmentTemplate(),
      ],
      [
        AWS_ResourceType.INSPECTOR_RESOURCEGROUP,
        () => new INSPECTOR_ResourceGroup(),
      ],
      [
        AWS_ResourceType.INSPECTOR2_DELEGATEDADMINACCOUNT,
        () => new INSPECTOR2_DelegatedAdminAccount(),
      ],
      [AWS_ResourceType.INSPECTOR2_ENABLER, () => new INSPECTOR2_Enabler()],
      [
        AWS_ResourceType.INSPECTOR2_MEMBERASSOCIATION,
        () => new INSPECTOR2_MemberAssociation(),
      ],
      [
        AWS_ResourceType.INSPECTOR2_ORGANIZATIONCONFIGURATION,
        () => new INSPECTOR2_OrganizationConfiguration(),
      ],
      [AWS_ResourceType.IOT_AUTHORIZER, () => new IOT_Authorizer()],
      [AWS_ResourceType.IOT_BILLINGGROUP, () => new IOT_BillingGroup()],
      [AWS_ResourceType.IOT_CACERTIFICATE, () => new IOT_CaCertificate()],
      [AWS_ResourceType.IOT_CERTIFICATE, () => new IOT_Certificate()],
      [
        AWS_ResourceType.IOT_DOMAINCONFIGURATION,
        () => new IOT_DomainConfiguration(),
      ],
      [
        AWS_ResourceType.IOT_EVENTCONFIGURATIONS,
        () => new IOT_EventConfigurations(),
      ],
      [
        AWS_ResourceType.IOT_INDEXINGCONFIGURATION,
        () => new IOT_IndexingConfiguration(),
      ],
      [AWS_ResourceType.IOT_LOGGINGOPTIONS, () => new IOT_LoggingOptions()],
      [AWS_ResourceType.IOT_POLICY, () => new IOT_Policy()],
      [AWS_ResourceType.IOT_POLICYATTACHMENT, () => new IOT_PolicyAttachment()],
      [
        AWS_ResourceType.IOT_PROVISIONINGTEMPLATE,
        () => new IOT_ProvisioningTemplate(),
      ],
      [AWS_ResourceType.IOT_ROLEALIAS, () => new IOT_RoleAlias()],
      [AWS_ResourceType.IOT_THING, () => new IOT_Thing()],
      [AWS_ResourceType.IOT_THINGGROUP, () => new IOT_ThingGroup()],
      [
        AWS_ResourceType.IOT_THINGGROUPMEMBERSHIP,
        () => new IOT_ThingGroupMembership(),
      ],
      [
        AWS_ResourceType.IOT_THINGPRINCIPALATTACHMENT,
        () => new IOT_ThingPrincipalAttachment(),
      ],
      [AWS_ResourceType.IOT_THINGTYPE, () => new IOT_ThingType()],
      [AWS_ResourceType.IOT_TOPICRULE, () => new IOT_TopicRule()],
      [
        AWS_ResourceType.IOT_TOPICRULEDESTINATION,
        () => new IOT_TopicRuleDestination(),
      ],
      [AWS_ResourceType.IVS_CHANNEL, () => new IVS_Channel()],
      [AWS_ResourceType.IVS_PLAYBACKKEYPAIR, () => new IVS_PlaybackKeyPair()],
      [
        AWS_ResourceType.IVS_RECORDINGCONFIGURATION,
        () => new IVS_RecordingConfiguration(),
      ],
      [
        AWS_ResourceType.IVSCHAT_LOGGINGCONFIGURATION,
        () => new IVSCHAT_LoggingConfiguration(),
      ],
      [AWS_ResourceType.IVSCHAT_ROOM, () => new IVSCHAT_Room()],
      [AWS_ResourceType.KENDRA_DATASOURCE, () => new KENDRA_DataSource()],
      [AWS_ResourceType.KENDRA_EXPERIENCE, () => new KENDRA_Experience()],
      [AWS_ResourceType.KENDRA_FAQ, () => new KENDRA_Faq()],
      [AWS_ResourceType.KENDRA_INDEX, () => new KENDRA_Index()],
      [
        AWS_ResourceType.KENDRA_QUERYSUGGESTIONSBLOCKLIST,
        () => new KENDRA_QuerySuggestionsBlockList(),
      ],
      [AWS_ResourceType.KENDRA_THESAURUS, () => new KENDRA_Thesaurus()],
      [AWS_ResourceType.KEYSPACES_KEYSPACE, () => new KEYSPACES_Keyspace()],
      [AWS_ResourceType.KEYSPACES_TABLE, () => new KEYSPACES_Table()],
      [
        AWS_ResourceType.KINESIS_ANALYTICSAPPLICATION,
        () => new KINESIS_AnalyticsApplication(),
      ],
      [
        AWS_ResourceType.KINESIS_FIREHOSEDELIVERYSTREAM,
        () => new KINESIS_FirehoseDeliveryStream(),
      ],
      [
        AWS_ResourceType.KINESIS_RESOURCEPOLICY,
        () => new KINESIS_ResourcePolicy(),
      ],
      [AWS_ResourceType.KINESIS_STREAM, () => new KINESIS_Stream()],
      [
        AWS_ResourceType.KINESIS_STREAMCONSUMER,
        () => new KINESIS_StreamConsumer(),
      ],
      [AWS_ResourceType.KINESIS_VIDEOSTREAM, () => new KINESIS_VideoStream()],
      [
        AWS_ResourceType.KINESISANALYTICSV2_APPLICATION,
        () => new KINESISANALYTICSV2_Application(),
      ],
      [
        AWS_ResourceType.KINESISANALYTICSV2_APPLICATIONSNAPSHOT,
        () => new KINESISANALYTICSV2_ApplicationSnapshot(),
      ],
      [AWS_ResourceType.KMS_ALIAS, () => new KMS_Alias()],
      [AWS_ResourceType.KMS_CIPHERTEXT, () => new KMS_Ciphertext()],
      [AWS_ResourceType.KMS_CUSTOMKEYSTORE, () => new KMS_CustomKeyStore()],
      [AWS_ResourceType.KMS_EXTERNALKEY, () => new KMS_ExternalKey()],
      [AWS_ResourceType.KMS_GRANT, () => new KMS_Grant()],
      [AWS_ResourceType.KMS_KEY, () => new KMS_Key()],
      [AWS_ResourceType.KMS_KEYPOLICY, () => new KMS_KeyPolicy()],
      [
        AWS_ResourceType.KMS_REPLICAEXTERNALKEY,
        () => new KMS_ReplicaExternalKey(),
      ],
      [AWS_ResourceType.KMS_REPLICAKEY, () => new KMS_ReplicaKey()],
      [
        AWS_ResourceType.LAKEFORMATION_DATALAKESETTINGS,
        () => new LAKEFORMATION_DataLakeSettings(),
      ],
      [AWS_ResourceType.LAKEFORMATION_LFTAG, () => new LAKEFORMATION_LfTag()],
      [
        AWS_ResourceType.LAKEFORMATION_PERMISSIONS,
        () => new LAKEFORMATION_Permissions(),
      ],
      [
        AWS_ResourceType.LAKEFORMATION_RESOURCE,
        () => new LAKEFORMATION_Resource(),
      ],
      [
        AWS_ResourceType.LAKEFORMATION_RESOURCELFTAGS,
        () => new LAKEFORMATION_ResourceLfTags(),
      ],
      [AWS_ResourceType.LAMBDA_ALIAS, () => new LAMBDA_Alias()],
      [
        AWS_ResourceType.LAMBDA_CODESIGNINGCONFIG,
        () => new LAMBDA_CodeSigningConfig(),
      ],
      [
        AWS_ResourceType.LAMBDA_EVENTSOURCEMAPPING,
        () => new LAMBDA_EventSourceMapping(),
      ],
      [AWS_ResourceType.LAMBDA_FUNCTION, () => new LAMBDA_Function()],
      [
        AWS_ResourceType.LAMBDA_FUNCTIONEVENTINVOKECONFIG,
        () => new LAMBDA_FunctionEventInvokeConfig(),
      ],
      [AWS_ResourceType.LAMBDA_FUNCTIONURL, () => new LAMBDA_FunctionUrl()],
      [AWS_ResourceType.LAMBDA_INVOCATION, () => new LAMBDA_Invocation()],
      [AWS_ResourceType.LAMBDA_LAYERVERSION, () => new LAMBDA_LayerVersion()],
      [
        AWS_ResourceType.LAMBDA_LAYERVERSIONPERMISSION,
        () => new LAMBDA_LayerVersionPermission(),
      ],
      [AWS_ResourceType.LAMBDA_PERMISSION, () => new LAMBDA_Permission()],
      [
        AWS_ResourceType.LAMBDA_PROVISIONEDCONCURRENCYCONFIG,
        () => new LAMBDA_ProvisionedConcurrencyConfig(),
      ],
      [AWS_ResourceType.LB_LISTENER, () => new LB_Listener()],
      [
        AWS_ResourceType.LB_LISTENERCERTIFICATE,
        () => new LB_ListenerCertificate(),
      ],
      [AWS_ResourceType.LB_LISTENERRULE, () => new LB_ListenerRule()],
      [AWS_ResourceType.LB_LOADBALANCER, () => new LB_LoadBalancer()],
      [AWS_ResourceType.LB_TARGETGROUP, () => new LB_TargetGroup()],
      [
        AWS_ResourceType.LB_TARGETGROUPATTACHMENT,
        () => new LB_TargetGroupAttachment(),
      ],
      [AWS_ResourceType.LB_TRUSTSTORE, () => new LB_TrustStore()],
      [
        AWS_ResourceType.LB_TRUSTSTOREREVOCATION,
        () => new LB_TrustStoreRevocation(),
      ],
      [AWS_ResourceType.LEX_BOT, () => new LEX_Bot()],
      [AWS_ResourceType.LEX_BOTALIAS, () => new LEX_BotAlias()],
      [AWS_ResourceType.LEX_INTENT, () => new LEX_Intent()],
      [AWS_ResourceType.LEX_SLOTTYPE, () => new LEX_SlotType()],
      [AWS_ResourceType.LEX_V2MODELSBOT, () => new LEX_V2modelsBot()],
      [
        AWS_ResourceType.LEX_V2MODELSBOTLOCALE,
        () => new LEX_V2modelsBotLocale(),
      ],
      [
        AWS_ResourceType.LEX_V2MODELSBOTVERSION,
        () => new LEX_V2modelsBotVersion(),
      ],
      [AWS_ResourceType.LEX_V2MODELSINTENT, () => new LEX_V2modelsIntent()],
      [AWS_ResourceType.LEX_V2MODELSSLOT, () => new LEX_V2modelsSlot()],
      [AWS_ResourceType.LEX_V2MODELSSLOTTYPE, () => new LEX_V2modelsSlotType()],
      [
        AWS_ResourceType.LICENSEMANAGER_ASSOCIATION,
        () => new LICENSEMANAGER_Association(),
      ],
      [
        AWS_ResourceType.LICENSEMANAGER_LICENSECONFIGURATION,
        () => new LICENSEMANAGER_LicenseConfiguration(),
      ],
      [
        AWS_ResourceType.LICENSEMANAGER_LICENSEGRANT,
        () => new LICENSEMANAGER_LicenseGrant(),
      ],
      [
        AWS_ResourceType.LICENSEMANAGER_LICENSEGRANTACCEPTER,
        () => new LICENSEMANAGER_LicenseGrantAccepter(),
      ],
      [AWS_ResourceType.LIGHTSAIL_BUCKET, () => new LIGHTSAIL_Bucket()],
      [
        AWS_ResourceType.LIGHTSAIL_BUCKETACCESSKEY,
        () => new LIGHTSAIL_BucketAccessKey(),
      ],
      [
        AWS_ResourceType.LIGHTSAIL_BUCKETRESOURCEACCESS,
        () => new LIGHTSAIL_BucketResourceAccess(),
      ],
      [
        AWS_ResourceType.LIGHTSAIL_CERTIFICATE,
        () => new LIGHTSAIL_Certificate(),
      ],
      [
        AWS_ResourceType.LIGHTSAIL_CONTAINERSERVICE,
        () => new LIGHTSAIL_ContainerService(),
      ],
      [
        AWS_ResourceType.LIGHTSAIL_CONTAINERSERVICEDEPLOYMENTVERSION,
        () => new LIGHTSAIL_ContainerServiceDeploymentVersion(),
      ],
      [AWS_ResourceType.LIGHTSAIL_DATABASE, () => new LIGHTSAIL_Database()],
      [AWS_ResourceType.LIGHTSAIL_DISK, () => new LIGHTSAIL_Disk()],
      [
        AWS_ResourceType.LIGHTSAIL_DISK_ATTACHMENT,
        () => new LIGHTSAIL_Disk_attachment(),
      ],
      [
        AWS_ResourceType.LIGHTSAIL_DISTRIBUTION,
        () => new LIGHTSAIL_Distribution(),
      ],
      [AWS_ResourceType.LIGHTSAIL_DOMAIN, () => new LIGHTSAIL_Domain()],
      [
        AWS_ResourceType.LIGHTSAIL_DOMAINENTRY,
        () => new LIGHTSAIL_DomainEntry(),
      ],
      [AWS_ResourceType.LIGHTSAIL_INSTANCE, () => new LIGHTSAIL_Instance()],
      [
        AWS_ResourceType.LIGHTSAIL_INSTANCEPUBLICPORTS,
        () => new LIGHTSAIL_InstancePublicPorts(),
      ],
      [AWS_ResourceType.LIGHTSAIL_KEYPAIR, () => new LIGHTSAIL_KeyPair()],
      [AWS_ResourceType.LIGHTSAIL_LB, () => new LIGHTSAIL_Lb()],
      [
        AWS_ResourceType.LIGHTSAIL_LBATTACHMENT,
        () => new LIGHTSAIL_LbAttachment(),
      ],
      [
        AWS_ResourceType.LIGHTSAIL_LBCERTIFICATE,
        () => new LIGHTSAIL_LbCertificate(),
      ],
      [
        AWS_ResourceType.LIGHTSAIL_LBCERTIFICATEATTACHMENT,
        () => new LIGHTSAIL_LbCertificateAttachment(),
      ],
      [
        AWS_ResourceType.LIGHTSAIL_LBHTTPSREDIRECTIONPOLICY,
        () => new LIGHTSAIL_LbHttpsRedirectionPolicy(),
      ],
      [
        AWS_ResourceType.LIGHTSAIL_LBSTICKINESSPOLICY,
        () => new LIGHTSAIL_LbStickinessPolicy(),
      ],
      [AWS_ResourceType.LIGHTSAIL_STATICIP, () => new LIGHTSAIL_StaticIp()],
      [
        AWS_ResourceType.LIGHTSAIL_STATICIPATTACHMENT,
        () => new LIGHTSAIL_StaticIpAttachment(),
      ],
      [
        AWS_ResourceType.LOCATION_GEOFENCECOLLECTION,
        () => new LOCATION_GeofenceCollection(),
      ],
      [AWS_ResourceType.LOCATION_MAP, () => new LOCATION_Map()],
      [AWS_ResourceType.LOCATION_PLACEINDEX, () => new LOCATION_PlaceIndex()],
      [
        AWS_ResourceType.LOCATION_ROUTECALCULATION,
        () => new LOCATION_RouteCalculation(),
      ],
      [AWS_ResourceType.LOCATION_TRACKER, () => new LOCATION_Tracker()],
      [
        AWS_ResourceType.LOCATION_TRACKERASSOCIATION,
        () => new LOCATION_TrackerAssociation(),
      ],
      [
        AWS_ResourceType.MACIE_CUSTOMDATAIDENTIFIER,
        () => new MACIE_CustomDataIdentifier(),
      ],
      [AWS_ResourceType.MACIE_FINDINGSFILTER, () => new MACIE_FindingsFilter()],
      [AWS_ResourceType.MACIE2_ACCOUNT, () => new MACIE2_Account()],
      [
        AWS_ResourceType.MACIE2_CLASSIFICATIONEXPORTCONFIGURATION,
        () => new MACIE2_ClassificationExportConfiguration(),
      ],
      [
        AWS_ResourceType.MACIE2_CLASSIFICATIONJOB,
        () => new MACIE2_ClassificationJob(),
      ],
      [
        AWS_ResourceType.MACIE2_INVITATIONACCEPTER,
        () => new MACIE2_InvitationAccepter(),
      ],
      [AWS_ResourceType.MACIE2_MEMBER, () => new MACIE2_Member()],
      [
        AWS_ResourceType.MACIE2_ORGANIZATIONADMINACCOUNT,
        () => new MACIE2_OrganizationAdminAccount(),
      ],
      [AWS_ResourceType.MEDIACONVERT_QUEUE, () => new MEDIACONVERT_Queue()],
      [AWS_ResourceType.MEDIALIVE_CHANNEL, () => new MEDIALIVE_Channel()],
      [AWS_ResourceType.MEDIALIVE_INPUT, () => new MEDIALIVE_Input()],
      [
        AWS_ResourceType.MEDIALIVE_INPUTSECURITYGROUP,
        () => new MEDIALIVE_InputSecurityGroup(),
      ],
      [AWS_ResourceType.MEDIALIVE_MULTIPLEX, () => new MEDIALIVE_Multiplex()],
      [
        AWS_ResourceType.MEDIALIVE_MULTIPLEXPROGRAM,
        () => new MEDIALIVE_MultiplexProgram(),
      ],
      [AWS_ResourceType.MEDIAPACKAGE_CHANNEL, () => new MEDIAPACKAGE_Channel()],
      [AWS_ResourceType.MEDIASTORE_CONTAINER, () => new MEDIASTORE_Container()],
      [
        AWS_ResourceType.MEDIASTORE_CONTAINERPOLICY,
        () => new MEDIASTORE_ContainerPolicy(),
      ],
      [AWS_ResourceType.MEMORYDB_ACL, () => new MEMORYDB_Acl()],
      [AWS_ResourceType.MEMORYDB_CLUSTER, () => new MEMORYDB_Cluster()],
      [
        AWS_ResourceType.MEMORYDB_PARAMETERGROUP,
        () => new MEMORYDB_ParameterGroup(),
      ],
      [AWS_ResourceType.MEMORYDB_SNAPSHOT, () => new MEMORYDB_Snapshot()],
      [AWS_ResourceType.MEMORYDB_SUBNETGROUP, () => new MEMORYDB_SubnetGroup()],
      [AWS_ResourceType.MEMORYDB_USER, () => new MEMORYDB_User()],
      [AWS_ResourceType.MQ_BROKER, () => new MQ_Broker()],
      [AWS_ResourceType.MQ_CONFIGURATION, () => new MQ_Configuration()],
      [AWS_ResourceType.MSK_CLUSTER, () => new MSK_Cluster()],
      [AWS_ResourceType.MSK_CLUSTERPOLICY, () => new MSK_ClusterPolicy()],
      [AWS_ResourceType.MSK_CONFIGURATION, () => new MSK_Configuration()],
      [AWS_ResourceType.MSK_REPLICATOR, () => new MSK_Replicator()],
      [
        AWS_ResourceType.MSK_SCRAMSECRETASSOCIATION,
        () => new MSK_ScramSecretAssociation(),
      ],
      [
        AWS_ResourceType.MSK_SERVERLESSCLUSTER,
        () => new MSK_ServerlessCluster(),
      ],
      [AWS_ResourceType.MSK_VPCCONNECTION, () => new MSK_VpcConnection()],
      [AWS_ResourceType.MSKCONNECT_CONNECTOR, () => new MSKCONNECT_Connector()],
      [
        AWS_ResourceType.MSKCONNECT_CUSTOMPLUGIN,
        () => new MSKCONNECT_CustomPlugin(),
      ],
      [
        AWS_ResourceType.MSKCONNECT_WORKERCONFIGURATION,
        () => new MSKCONNECT_WorkerConfiguration(),
      ],
      [AWS_ResourceType.MWAA_ENVIRONMENT, () => new MWAA_Environment()],
      [AWS_ResourceType.NEPTUNE_CLUSTER, () => new NEPTUNE_Cluster()],
      [
        AWS_ResourceType.NEPTUNE_CLUSTERENDPOINT,
        () => new NEPTUNE_ClusterEndpoint(),
      ],
      [
        AWS_ResourceType.NEPTUNE_CLUSTERINSTANCE,
        () => new NEPTUNE_ClusterInstance(),
      ],
      [
        AWS_ResourceType.NEPTUNE_CLUSTERPARAMETERGROUP,
        () => new NEPTUNE_ClusterParameterGroup(),
      ],
      [
        AWS_ResourceType.NEPTUNE_CLUSTERSNAPSHOT,
        () => new NEPTUNE_ClusterSnapshot(),
      ],
      [
        AWS_ResourceType.NEPTUNE_EVENTSUBSCRIPTION,
        () => new NEPTUNE_EventSubscription(),
      ],
      [
        AWS_ResourceType.NEPTUNE_GLOBALCLUSTER,
        () => new NEPTUNE_GlobalCluster(),
      ],
      [
        AWS_ResourceType.NEPTUNE_PARAMETERGROUP,
        () => new NEPTUNE_ParameterGroup(),
      ],
      [AWS_ResourceType.NEPTUNE_SUBNETGROUP, () => new NEPTUNE_SubnetGroup()],
      [
        AWS_ResourceType.NETWORKFIREWALL_FIREWALL,
        () => new NETWORKFIREWALL_Firewall(),
      ],
      [
        AWS_ResourceType.NETWORKFIREWALL_FIREWALLPOLICY,
        () => new NETWORKFIREWALL_FirewallPolicy(),
      ],
      [
        AWS_ResourceType.NETWORKFIREWALL_LOGGINGCONFIGURATION,
        () => new NETWORKFIREWALL_LoggingConfiguration(),
      ],
      [
        AWS_ResourceType.NETWORKFIREWALL_RESOURCEPOLICY,
        () => new NETWORKFIREWALL_ResourcePolicy(),
      ],
      [
        AWS_ResourceType.NETWORKFIREWALL_RULEGROUP,
        () => new NETWORKFIREWALL_RuleGroup(),
      ],
      [
        AWS_ResourceType.NETWORKMANAGER_ATTACHMENTACCEPTER,
        () => new NETWORKMANAGER_AttachmentAccepter(),
      ],
      [
        AWS_ResourceType.NETWORKMANAGER_CONNECTATTACHMENT,
        () => new NETWORKMANAGER_ConnectAttachment(),
      ],
      [
        AWS_ResourceType.NETWORKMANAGER_CONNECTION,
        () => new NETWORKMANAGER_Connection(),
      ],
      [
        AWS_ResourceType.NETWORKMANAGER_CONNECTPEER,
        () => new NETWORKMANAGER_ConnectPeer(),
      ],
      [
        AWS_ResourceType.NETWORKMANAGER_CORENETWORK,
        () => new NETWORKMANAGER_CoreNetwork(),
      ],
      [
        AWS_ResourceType.NETWORKMANAGER_CORENETWORKPOLICYATTACHMENT,
        () => new NETWORKMANAGER_CoreNetworkPolicyAttachment(),
      ],
      [
        AWS_ResourceType.NETWORKMANAGER_CUSTOMERGATEWAYASSOCIATION,
        () => new NETWORKMANAGER_CustomerGatewayAssociation(),
      ],
      [
        AWS_ResourceType.NETWORKMANAGER_DEVICE,
        () => new NETWORKMANAGER_Device(),
      ],
      [
        AWS_ResourceType.NETWORKMANAGER_GLOBALNETWORK,
        () => new NETWORKMANAGER_GlobalNetwork(),
      ],
      [AWS_ResourceType.NETWORKMANAGER_LINK, () => new NETWORKMANAGER_Link()],
      [
        AWS_ResourceType.NETWORKMANAGER_LINKASSOCIATION,
        () => new NETWORKMANAGER_LinkAssociation(),
      ],
      [AWS_ResourceType.NETWORKMANAGER_SITE, () => new NETWORKMANAGER_Site()],
      [
        AWS_ResourceType.NETWORKMANAGER_SITETOSITEVPNATTACHMENT,
        () => new NETWORKMANAGER_SiteToSiteVpnAttachment(),
      ],
      [
        AWS_ResourceType.NETWORKMANAGER_TRANSITGATEWAYCONNECTPEERASSOCIATION,
        () => new NETWORKMANAGER_TransitGatewayConnectPeerAssociation(),
      ],
      [
        AWS_ResourceType.NETWORKMANAGER_TRANSITGATEWAYPEERING,
        () => new NETWORKMANAGER_TransitGatewayPeering(),
      ],
      [
        AWS_ResourceType.NETWORKMANAGER_TRANSITGATEWAYREGISTRATION,
        () => new NETWORKMANAGER_TransitGatewayRegistration(),
      ],
      [
        AWS_ResourceType.NETWORKMANAGER_TRANSITGATEWAYROUTETABLEATTACHMENT,
        () => new NETWORKMANAGER_TransitGatewayRouteTableAttachment(),
      ],
      [
        AWS_ResourceType.NETWORKMANAGER_VPCATTACHMENT,
        () => new NETWORKMANAGER_VpcAttachment(),
      ],
      [AWS_ResourceType.OAM_LINK, () => new OAM_Link()],
      [AWS_ResourceType.OAM_SINK, () => new OAM_Sink()],
      [AWS_ResourceType.OAM_SINKPOLICY, () => new OAM_SinkPolicy()],
      [AWS_ResourceType.OPENSEARCH_DOMAIN, () => new OPENSEARCH_Domain()],
      [
        AWS_ResourceType.OPENSEARCH_DOMAINPOLICY,
        () => new OPENSEARCH_DomainPolicy(),
      ],
      [
        AWS_ResourceType.OPENSEARCH_DOMAINSAMLOPTIONS,
        () => new OPENSEARCH_DomainSamlOptions(),
      ],
      [
        AWS_ResourceType.OPENSEARCH_INBOUNDCONNECTIONACCEPTER,
        () => new OPENSEARCH_InboundConnectionAccepter(),
      ],
      [
        AWS_ResourceType.OPENSEARCH_OUTBOUNDCONNECTION,
        () => new OPENSEARCH_OutboundConnection(),
      ],
      [AWS_ResourceType.OPENSEARCH_PACKAGE, () => new OPENSEARCH_Package()],
      [
        AWS_ResourceType.OPENSEARCH_PACKAGEASSOCIATION,
        () => new OPENSEARCH_PackageAssociation(),
      ],
      [
        AWS_ResourceType.OPENSEARCH_SERVERLESSACCESSPOLICY,
        () => new OPENSEARCH_ServerlessAccessPolicy(),
      ],
      [
        AWS_ResourceType.OPENSEARCH_SERVERLESSCOLLECTION,
        () => new OPENSEARCH_ServerlessCollection(),
      ],
      [
        AWS_ResourceType.OPENSEARCH_SERVERLESSLIFECYCLEPOLICY,
        () => new OPENSEARCH_ServerlessLifecyclePolicy(),
      ],
      [
        AWS_ResourceType.OPENSEARCH_SERVERLESSSECURITYCONFIG,
        () => new OPENSEARCH_ServerlessSecurityConfig(),
      ],
      [
        AWS_ResourceType.OPENSEARCH_SERVERLESSSECURITYPOLICY,
        () => new OPENSEARCH_ServerlessSecurityPolicy(),
      ],
      [
        AWS_ResourceType.OPENSEARCH_SERVERLESSVPCENDPOINT,
        () => new OPENSEARCH_ServerlessVpcEndpoint(),
      ],
      [
        AWS_ResourceType.OPENSEARCH_VPCENDPOINT,
        () => new OPENSEARCH_VpcEndpoint(),
      ],
      [
        AWS_ResourceType.OPENSEARCHINGEST_PIPELINE,
        () => new OPENSEARCHINGEST_Pipeline(),
      ],
      [AWS_ResourceType.OPSWORKS_APPLICATION, () => new OPSWORKS_Application()],
      [AWS_ResourceType.OPSWORKS_CUSTOMLAYER, () => new OPSWORKS_CustomLayer()],
      [
        AWS_ResourceType.OPSWORKS_ECSCLUSTERLAYER,
        () => new OPSWORKS_EcsClusterLayer(),
      ],
      [
        AWS_ResourceType.OPSWORKS_GANGLIALAYER,
        () => new OPSWORKS_GangliaLayer(),
      ],
      [
        AWS_ResourceType.OPSWORKS_HAPROXYLAYER,
        () => new OPSWORKS_HaproxyLayer(),
      ],
      [AWS_ResourceType.OPSWORKS_INSTANCE, () => new OPSWORKS_Instance()],
      [
        AWS_ResourceType.OPSWORKS_JAVAAPPLAYER,
        () => new OPSWORKS_JavaAppLayer(),
      ],
      [
        AWS_ResourceType.OPSWORKS_MEMCACHEDLAYER,
        () => new OPSWORKS_MemcachedLayer(),
      ],
      [AWS_ResourceType.OPSWORKS_MYSQLLAYER, () => new OPSWORKS_MysqlLayer()],
      [
        AWS_ResourceType.OPSWORKS_NODEJSAPPLAYER,
        () => new OPSWORKS_NodejsAppLayer(),
      ],
      [AWS_ResourceType.OPSWORKS_PERMISSION, () => new OPSWORKS_Permission()],
      [AWS_ResourceType.OPSWORKS_PHPAPPLAYER, () => new OPSWORKS_PhpAppLayer()],
      [
        AWS_ResourceType.OPSWORKS_RAILSAPPLAYER,
        () => new OPSWORKS_RailsAppLayer(),
      ],
      [
        AWS_ResourceType.OPSWORKS_RDSDBINSTANCE,
        () => new OPSWORKS_RdsDbInstance(),
      ],
      [AWS_ResourceType.OPSWORKS_STACK, () => new OPSWORKS_Stack()],
      [
        AWS_ResourceType.OPSWORKS_STATICWEBLAYER,
        () => new OPSWORKS_StaticWebLayer(),
      ],
      [AWS_ResourceType.OPSWORKS_USERPROFILE, () => new OPSWORKS_UserProfile()],
      [
        AWS_ResourceType.ORGANIZATIONS_ACCOUNT,
        () => new ORGANIZATIONS_Account(),
      ],
      [
        AWS_ResourceType.ORGANIZATIONS_DELEGATEDADMINISTRATOR,
        () => new ORGANIZATIONS_DelegatedAdministrator(),
      ],
      [
        AWS_ResourceType.ORGANIZATIONS_ORGANIZATION,
        () => new ORGANIZATIONS_Organization(),
      ],
      [
        AWS_ResourceType.ORGANIZATIONS_ORGANIZATIONALUNIT,
        () => new ORGANIZATIONS_OrganizationalUnit(),
      ],
      [AWS_ResourceType.ORGANIZATIONS_POLICY, () => new ORGANIZATIONS_Policy()],
      [
        AWS_ResourceType.ORGANIZATIONS_POLICYATTACHMENT,
        () => new ORGANIZATIONS_PolicyAttachment(),
      ],
      [
        AWS_ResourceType.ORGANIZATIONS_RESOURCEPOLICY,
        () => new ORGANIZATIONS_ResourcePolicy(),
      ],
      [AWS_ResourceType.PINPOINT_ADMCHANNEL, () => new PINPOINT_AdmChannel()],
      [AWS_ResourceType.PINPOINT_APNSCHANNEL, () => new PINPOINT_ApnsChannel()],
      [
        AWS_ResourceType.PINPOINT_APNSSANDBOXCHANNEL,
        () => new PINPOINT_ApnsSandboxChannel(),
      ],
      [
        AWS_ResourceType.PINPOINT_APNSVOIPCHANNEL,
        () => new PINPOINT_ApnsVoipChannel(),
      ],
      [
        AWS_ResourceType.PINPOINT_APNSVOIPSANDBOXCHANNEL,
        () => new PINPOINT_ApnsVoipSandboxChannel(),
      ],
      [AWS_ResourceType.PINPOINT_APP, () => new PINPOINT_App()],
      [
        AWS_ResourceType.PINPOINT_BAIDUCHANNEL,
        () => new PINPOINT_BaiduChannel(),
      ],
      [
        AWS_ResourceType.PINPOINT_EMAILCHANNEL,
        () => new PINPOINT_EmailChannel(),
      ],
      [AWS_ResourceType.PINPOINT_EVENTSTREAM, () => new PINPOINT_EventStream()],
      [AWS_ResourceType.PINPOINT_GCMCHANNEL, () => new PINPOINT_GcmChannel()],
      [AWS_ResourceType.PINPOINT_SMSCHANNEL, () => new PINPOINT_SmsChannel()],
      [AWS_ResourceType.PIPES_PIPE, () => new PIPES_Pipe()],
      [AWS_ResourceType.QLDB_LEDGER, () => new QLDB_Ledger()],
      [AWS_ResourceType.QLDB_STREAM, () => new QLDB_Stream()],
      [
        AWS_ResourceType.QUICKSIGHT_ACCOUNTSUBSCRIPTION,
        () => new QUICKSIGHT_AccountSubscription(),
      ],
      [AWS_ResourceType.QUICKSIGHT_ANALYSIS, () => new QUICKSIGHT_Analysis()],
      [AWS_ResourceType.QUICKSIGHT_DASHBOARD, () => new QUICKSIGHT_Dashboard()],
      [AWS_ResourceType.QUICKSIGHT_DATASET, () => new QUICKSIGHT_DataSet()],
      [
        AWS_ResourceType.QUICKSIGHT_DATASOURCE,
        () => new QUICKSIGHT_DataSource(),
      ],
      [AWS_ResourceType.QUICKSIGHT_FOLDER, () => new QUICKSIGHT_Folder()],
      [
        AWS_ResourceType.QUICKSIGHT_FOLDERMEMBERSHIP,
        () => new QUICKSIGHT_FolderMembership(),
      ],
      [AWS_ResourceType.QUICKSIGHT_GROUP, () => new QUICKSIGHT_Group()],
      [
        AWS_ResourceType.QUICKSIGHT_GROUPMEMBERSHIP,
        () => new QUICKSIGHT_GroupMembership(),
      ],
      [
        AWS_ResourceType.QUICKSIGHT_IAMPOLICYASSIGNMENT,
        () => new QUICKSIGHT_IamPolicyAssignment(),
      ],
      [AWS_ResourceType.QUICKSIGHT_INGESTION, () => new QUICKSIGHT_Ingestion()],
      [AWS_ResourceType.QUICKSIGHT_NAMESPACE, () => new QUICKSIGHT_Namespace()],
      [
        AWS_ResourceType.QUICKSIGHT_REFRESHSCHEDULE,
        () => new QUICKSIGHT_RefreshSchedule(),
      ],
      [AWS_ResourceType.QUICKSIGHT_TEMPLATE, () => new QUICKSIGHT_Template()],
      [
        AWS_ResourceType.QUICKSIGHT_TEMPLATEALIAS,
        () => new QUICKSIGHT_TemplateAlias(),
      ],
      [AWS_ResourceType.QUICKSIGHT_THEME, () => new QUICKSIGHT_Theme()],
      [AWS_ResourceType.QUICKSIGHT_USER, () => new QUICKSIGHT_User()],
      [
        AWS_ResourceType.QUICKSIGHT_VPCCONNECTION,
        () => new QUICKSIGHT_VpcConnection(),
      ],
      [
        AWS_ResourceType.RAM_PRINCIPALASSOCIATION,
        () => new RAM_PrincipalAssociation(),
      ],
      [
        AWS_ResourceType.RAM_RESOURCEASSOCIATION,
        () => new RAM_ResourceAssociation(),
      ],
      [AWS_ResourceType.RAM_RESOURCESHARE, () => new RAM_ResourceShare()],
      [
        AWS_ResourceType.RAM_RESOURCESHAREACCEPTER,
        () => new RAM_ResourceShareAccepter(),
      ],
      [
        AWS_ResourceType.RAM_SHARINGWITHORGANIZATION,
        () => new RAM_SharingWithOrganization(),
      ],
      [AWS_ResourceType.RBIN_RULE, () => new RBIN_Rule()],
      [AWS_ResourceType.RDS_CLUSTER, () => new RDS_Cluster()],
      [
        AWS_ResourceType.RDS_CLUSTERACTIVITYSTREAM,
        () => new RDS_ClusterActivityStream(),
      ],
      [AWS_ResourceType.RDS_CLUSTERENDPOINT, () => new RDS_ClusterEndpoint()],
      [AWS_ResourceType.RDS_CLUSTERINSTANCE, () => new RDS_ClusterInstance()],
      [
        AWS_ResourceType.RDS_CLUSTERPARAMETERGROUP,
        () => new RDS_ClusterParameterGroup(),
      ],
      [
        AWS_ResourceType.RDS_CLUSTERROLEASSOCIATION,
        () => new RDS_ClusterRoleAssociation(),
      ],
      [AWS_ResourceType.RDS_CLUSTERSNAPSHOT, () => new RDS_ClusterSnapshot()],
      [
        AWS_ResourceType.RDS_CUSTOMDBENGINEVERSION,
        () => new RDS_CustomDbEngineVersion(),
      ],
      [
        AWS_ResourceType.RDS_EVENTSUBSCRIPTION,
        () => new RDS_EventSubscription(),
      ],
      [AWS_ResourceType.RDS_EXPORTTASK, () => new RDS_ExportTask()],
      [AWS_ResourceType.RDS_GLOBALCLUSTER, () => new RDS_GlobalCluster()],
      [AWS_ResourceType.RDS_INSTANCE, () => new RDS_Instance()],
      [
        AWS_ResourceType.RDS_INSTANCEAUTOMATEDBACKUPSREPLICATION,
        () => new RDS_InstanceAutomatedBackupsReplication(),
      ],
      [AWS_ResourceType.RDS_OPTIONGROUP, () => new RDS_OptionGroup()],
      [AWS_ResourceType.RDS_PARAMETERGROUP, () => new RDS_ParameterGroup()],
      [AWS_ResourceType.RDS_PROXY, () => new RDS_Proxy()],
      [
        AWS_ResourceType.RDS_PROXYDEFAULTTARGETGROUP,
        () => new RDS_ProxyDefaultTargetGroup(),
      ],
      [AWS_ResourceType.RDS_PROXYENDPOINT, () => new RDS_ProxyEndpoint()],
      [AWS_ResourceType.RDS_PROXYTARGET, () => new RDS_ProxyTarget()],
      [AWS_ResourceType.RDS_RESERVEDINSTANCE, () => new RDS_ReservedInstance()],
      [AWS_ResourceType.RDS_ROLEASSOCIATION, () => new RDS_RoleAssociation()],
      [AWS_ResourceType.RDS_SNAPSHOT, () => new RDS_Snapshot()],
      [AWS_ResourceType.RDS_SNAPSHOTCOPY, () => new RDS_SnapshotCopy()],
      [AWS_ResourceType.RDS_SUBNETGROUP, () => new RDS_SubnetGroup()],

      [
        AWS_ResourceType.REDSHIFT_AUTHENTICATIONPROFILE,
        () => new REDSHIFT_AuthenticationProfile(),
      ],
      [AWS_ResourceType.REDSHIFT_CLUSTER, () => new REDSHIFT_Cluster()],
      [
        AWS_ResourceType.REDSHIFT_CLUSTERIAMROLES,
        () => new REDSHIFT_ClusterIamRoles(),
      ],
      [
        AWS_ResourceType.REDSHIFT_CLUSTERSNAPSHOT,
        () => new REDSHIFT_ClusterSnapshot(),
      ],
      [
        AWS_ResourceType.REDSHIFT_DATASHAREAUTHORIZATION,
        () => new REDSHIFT_DataShareAuthorization(),
      ],
      [
        AWS_ResourceType.REDSHIFT_DATASHARECONSUMERASSOCIATION,
        () => new REDSHIFT_DataShareConsumerAssociation(),
      ],
      [
        AWS_ResourceType.REDSHIFT_ENDPOINTACCESS,
        () => new REDSHIFT_EndpointAccess(),
      ],
      [
        AWS_ResourceType.REDSHIFT_ENDPOINTAUTHORIZATION,
        () => new REDSHIFT_EndpointAuthorization(),
      ],
      [
        AWS_ResourceType.REDSHIFT_EVENTSUBSCRIPTION,
        () => new REDSHIFT_EventSubscription(),
      ],
      [
        AWS_ResourceType.REDSHIFT_HSMCLIENTCERTIFICATE,
        () => new REDSHIFT_HsmClientCertificate(),
      ],
      [
        AWS_ResourceType.REDSHIFT_HSMCONFIGURATION,
        () => new REDSHIFT_HsmConfiguration(),
      ],
      [
        AWS_ResourceType.REDSHIFT_PARAMETERGROUP,
        () => new REDSHIFT_ParameterGroup(),
      ],
      [AWS_ResourceType.REDSHIFT_PARTNER, () => new REDSHIFT_Partner()],
      [
        AWS_ResourceType.REDSHIFT_RESOURCEPOLICY,
        () => new REDSHIFT_ResourcePolicy(),
      ],
      [
        AWS_ResourceType.REDSHIFT_SCHEDULEDACTION,
        () => new REDSHIFT_ScheduledAction(),
      ],
      [
        AWS_ResourceType.REDSHIFT_SNAPSHOTCOPYGRANT,
        () => new REDSHIFT_SnapshotCopyGrant(),
      ],
      [
        AWS_ResourceType.REDSHIFT_SNAPSHOTSCHEDULE,
        () => new REDSHIFT_SnapshotSchedule(),
      ],
      [
        AWS_ResourceType.REDSHIFT_SNAPSHOTSCHEDULEASSOCIATION,
        () => new REDSHIFT_SnapshotScheduleAssociation(),
      ],
      [AWS_ResourceType.REDSHIFT_SUBNETGROUP, () => new REDSHIFT_SubnetGroup()],
      [AWS_ResourceType.REDSHIFT_USAGELIMIT, () => new REDSHIFT_UsageLimit()],
    ]);

  static readonly ResourceFactoryMap2 = new Map<
    AWS_ResourceType,
    () => Resource
  >([
    [
      AWS_ResourceType.REDSHIFTDATA_STATEMENT,
      () => new REDSHIFTDATA_Statement(),
    ],
    [
      AWS_ResourceType.REDSHIFTSERVERLESS_ENDPOINTACCESS,
      () => new REDSHIFTSERVERLESS_EndpointAccess(),
    ],
    [
      AWS_ResourceType.REDSHIFTSERVERLESS_NAMESPACE,
      () => new REDSHIFTSERVERLESS_Namespace(),
    ],
    [
      AWS_ResourceType.REDSHIFTSERVERLESS_RESOURCEPOLICY,
      () => new REDSHIFTSERVERLESS_ResourcePolicy(),
    ],
    [
      AWS_ResourceType.REDSHIFTSERVERLESS_SNAPSHOT,
      () => new REDSHIFTSERVERLESS_Snapshot(),
    ],
    [
      AWS_ResourceType.REDSHIFTSERVERLESS_USAGELIMIT,
      () => new REDSHIFTSERVERLESS_UsageLimit(),
    ],
    [
      AWS_ResourceType.REDSHIFTSERVERLESS_WORKGROUP,
      () => new REDSHIFTSERVERLESS_Workgroup(),
    ],
    [
      AWS_ResourceType.REKOGNITION_COLLECTION,
      () => new REKOGNITION_Collection(),
    ],
    [AWS_ResourceType.REKOGNITION_PROJECT, () => new REKOGNITION_Project()],
    [
      AWS_ResourceType.RESOURCEEXPLORER_INDEX,
      () => new RESOURCEEXPLORER_Index(),
    ],
    [AWS_ResourceType.RESOURCEEXPLORER_VIEW, () => new RESOURCEEXPLORER_View()],
    [AWS_ResourceType.RESOURCEGROUPS_GROUP, () => new RESOURCEGROUPS_Group()],
    [
      AWS_ResourceType.RESOURCEGROUPS_RESOURCE,
      () => new RESOURCEGROUPS_Resource(),
    ],
    [AWS_ResourceType.ROLESANYWHERE_PROFILE, () => new ROLESANYWHERE_Profile()],
    [
      AWS_ResourceType.ROLESANYWHERE_TRUSTANCHOR,
      () => new ROLESANYWHERE_TrustAnchor(),
    ],
    [
      AWS_ResourceType.ROUTE53_CIDRCOLLECTION,
      () => new ROUTE53_CidrCollection(),
    ],
    [AWS_ResourceType.ROUTE53_CIDRLOCATION, () => new ROUTE53_CidrLocation()],
    [AWS_ResourceType.ROUTE53_DELEGATIONSET, () => new ROUTE53_DelegationSet()],
    [AWS_ResourceType.ROUTE53_HEALTHCHECK, () => new ROUTE53_HealthCheck()],
    [
      AWS_ResourceType.ROUTE53_HOSTEDZONEDNSSEC,
      () => new ROUTE53_HostedZoneDnsSec(),
    ],
    [AWS_ResourceType.ROUTE53_KEYSIGNINGKEY, () => new ROUTE53_KeySigningKey()],
    [AWS_ResourceType.ROUTE53_QUERYLOG, () => new ROUTE53_QueryLog()],
    [AWS_ResourceType.ROUTE53_RECORD, () => new ROUTE53_Record()],
    [
      AWS_ResourceType.ROUTE53_RESOLVERCONFIG,
      () => new ROUTE53_ResolverConfig(),
    ],
    [
      AWS_ResourceType.ROUTE53_RESOLVERDNSSECCONFIG,
      () => new ROUTE53_ResolverDnsSecConfig(),
    ],
    [
      AWS_ResourceType.ROUTE53_RESOLVERENDPOINT,
      () => new ROUTE53_ResolverEndpoint(),
    ],
    [
      AWS_ResourceType.ROUTE53_RESOLVERFIREWALLCONFIG,
      () => new ROUTE53_ResolverFirewallConfig(),
    ],
    [
      AWS_ResourceType.ROUTE53_RESOLVERFIREWALLDOMAINLIST,
      () => new ROUTE53_ResolverFirewallDomainList(),
    ],
    [
      AWS_ResourceType.ROUTE53_RESOLVERFIREWALLRULE,
      () => new ROUTE53_ResolverFirewallRule(),
    ],
    [
      AWS_ResourceType.ROUTE53_RESOLVERFIREWALLRULEGROUP,
      () => new ROUTE53_ResolverFirewallRuleGroup(),
    ],
    [
      AWS_ResourceType.ROUTE53_RESOLVERFIREWALLRULEGROUPASSOCIATION,
      () => new ROUTE53_ResolverFirewallRuleGroupAssociation(),
    ],
    [
      AWS_ResourceType.ROUTE53_RESOLVERQUERYLOGCONFIG,
      () => new ROUTE53_ResolverQueryLogConfig(),
    ],
    [
      AWS_ResourceType.ROUTE53_RESOLVERQUERYLOGCONFIGASSOCIATION,
      () => new ROUTE53_ResolverQueryLogConfigAssociation(),
    ],
    [AWS_ResourceType.ROUTE53_RESOLVERRULE, () => new ROUTE53_ResolverRule()],
    [
      AWS_ResourceType.ROUTE53_RESOLVERRULEASSOCIATION,
      () => new ROUTE53_ResolverRuleAssociation(),
    ],
    [AWS_ResourceType.ROUTE53_TRAFFICPOLICY, () => new ROUTE53_TrafficPolicy()],
    [
      AWS_ResourceType.ROUTE53_TRAFFICPOLICYINSTANCE,
      () => new ROUTE53_TrafficPolicyInstance(),
    ],
    [
      AWS_ResourceType.ROUTE53_VPCASSOCIATIONAUTHORIZATION,
      () => new ROUTE53_VpcAssociationAuthorization(),
    ],
    [AWS_ResourceType.ROUTE53_ZONE, () => new ROUTE53_Zone()],
    [
      AWS_ResourceType.ROUTE53_ZONEASSOCIATION,
      () => new ROUTE53_ZoneAssociation(),
    ],
    [
      AWS_ResourceType.ROUTE53DOMAINS_DELEGATIONSIGNERRECORD,
      () => new ROUTE53DOMAINS_DelegationSignerRecord(),
    ],
    [
      AWS_ResourceType.ROUTE53DOMAINS_REGISTEREDDOMAIN,
      () => new ROUTE53DOMAINS_RegisteredDomain(),
    ],
    [
      AWS_ResourceType.ROUTE53RECOVERYCONTROL_CLUSTER,
      () => new ROUTE53RECOVERYCONTROL_Cluster(),
    ],
    [
      AWS_ResourceType.ROUTE53RECOVERYCONTROL_CONTROLPANEL,
      () => new ROUTE53RECOVERYCONTROL_ControlPanel(),
    ],
    [
      AWS_ResourceType.ROUTE53RECOVERYCONTROL_ROUTINGCONTROL,
      () => new ROUTE53RECOVERYCONTROL_RoutingControl(),
    ],
    [
      AWS_ResourceType.ROUTE53RECOVERYCONTROL_SAFETYRULE,
      () => new ROUTE53RECOVERYCONTROL_SafetyRule(),
    ],
    [
      AWS_ResourceType.ROUTE53RECOVERYREADINESS_CELL,
      () => new ROUTE53RECOVERYREADINESS_Cell(),
    ],
    [
      AWS_ResourceType.ROUTE53RECOVERYREADINESS_READINESSCHECK,
      () => new ROUTE53RECOVERYREADINESS_ReadinessCheck(),
    ],
    [
      AWS_ResourceType.ROUTE53RECOVERYREADINESS_RECOVERYGROUP,
      () => new ROUTE53RECOVERYREADINESS_RecoveryGroup(),
    ],
    [
      AWS_ResourceType.ROUTE53RECOVERYREADINESS_RESOURCESET,
      () => new ROUTE53RECOVERYREADINESS_ResourceSet(),
    ],
    [AWS_ResourceType.RUM_APPMONITOR, () => new RUM_AppMonitor()],
    [
      AWS_ResourceType.RUM_METRICSDESTINATION,
      () => new RUM_MetricsDestination(),
    ],
    [AWS_ResourceType.S3_ACCESSPOINT, () => new S3_AccessPoint()],
    [
      AWS_ResourceType.S3_ACCOUNTPUBLICACCESSBLOCK,
      () => new S3_AccountPublicAccessBlock(),
    ],
    [
      AWS_ResourceType.S3_ANALYTICSCONFIGURATION,
      () => new S3_AnalyticsConfiguration(),
    ],
    [AWS_ResourceType.S3_BUCKET, () => new S3_Bucket()],
    [
      AWS_ResourceType.S3_BUCKETACCELERATECONFIGURATIONV2,
      () => new S3_BucketAccelerateConfigurationV2(),
    ],
    [AWS_ResourceType.S3_BUCKETACLV2, () => new S3_BucketAclV2()],
    [
      AWS_ResourceType.S3_BUCKETCORSCONFIGURATIONV2,
      () => new S3_BucketCorsConfigurationV2(),
    ],
    [
      AWS_ResourceType.S3_BUCKETINTELLIGENTTIERINGCONFIGURATION,
      () => new S3_BucketIntelligentTieringConfiguration(),
    ],
    [
      AWS_ResourceType.S3_BUCKETLIFECYCLECONFIGURATIONV2,
      () => new S3_BucketLifecycleConfigurationV2(),
    ],
    [AWS_ResourceType.S3_BUCKETLOGGINGV2, () => new S3_BucketLoggingV2()],
    [AWS_ResourceType.S3_BUCKETMETRIC, () => new S3_BucketMetric()],
    [AWS_ResourceType.S3_BUCKETNOTIFICATION, () => new S3_BucketNotification()],
    [AWS_ResourceType.S3_BUCKETOBJECT, () => new S3_BucketObject()],
    [
      AWS_ResourceType.S3_BUCKETOBJECTLOCKCONFIGURATIONV2,
      () => new S3_BucketObjectLockConfigurationV2(),
    ],
    [AWS_ResourceType.S3_BUCKETOBJECTV2, () => new S3_BucketObjectv2()],
    [
      AWS_ResourceType.S3_BUCKETOWNERSHIPCONTROLS,
      () => new S3_BucketOwnershipControls(),
    ],
    [AWS_ResourceType.S3_BUCKETPOLICY, () => new S3_BucketPolicy()],
    [
      AWS_ResourceType.S3_BUCKETPUBLICACCESSBLOCK,
      () => new S3_BucketPublicAccessBlock(),
    ],
    [
      AWS_ResourceType.S3_BUCKETREPLICATIONCONFIG,
      () => new S3_BucketReplicationConfig(),
    ],
    [
      AWS_ResourceType.S3_BUCKETREQUESTPAYMENTCONFIGURATIONV2,
      () => new S3_BucketRequestPaymentConfigurationV2(),
    ],
    [
      AWS_ResourceType.S3_BUCKETSERVERSIDEENCRYPTIONCONFIGURATIONV2,
      () => new S3_BucketServerSideEncryptionConfigurationV2(),
    ],
    [AWS_ResourceType.S3_BUCKETV2, () => new S3_BucketV2()],
    [AWS_ResourceType.S3_BUCKETVERSIONINGV2, () => new S3_BucketVersioningV2()],
    [
      AWS_ResourceType.S3_BUCKETWEBSITECONFIGURATIONV2,
      () => new S3_BucketWebsiteConfigurationV2(),
    ],
    [AWS_ResourceType.S3_DIRECTORYBUCKET, () => new S3_DirectoryBucket()],
    [AWS_ResourceType.S3_INVENTORY, () => new S3_Inventory()],
    [AWS_ResourceType.S3_OBJECTCOPY, () => new S3_ObjectCopy()],
    [AWS_ResourceType.S3CONTROL_ACCESSGRANT, () => new S3CONTROL_AccessGrant()],
    [
      AWS_ResourceType.S3CONTROL_ACCESSGRANTSINSTANCE,
      () => new S3CONTROL_AccessGrantsInstance(),
    ],
    [
      AWS_ResourceType.S3CONTROL_ACCESSGRANTSINSTANCERESOURCEPOLICY,
      () => new S3CONTROL_AccessGrantsInstanceResourcePolicy(),
    ],
    [
      AWS_ResourceType.S3CONTROL_ACCESSGRANTSLOCATION,
      () => new S3CONTROL_AccessGrantsLocation(),
    ],
    [
      AWS_ResourceType.S3CONTROL_ACCESSPOINTPOLICY,
      () => new S3CONTROL_AccessPointPolicy(),
    ],
    [AWS_ResourceType.S3CONTROL_BUCKET, () => new S3CONTROL_Bucket()],
    [
      AWS_ResourceType.S3CONTROL_BUCKETLIFECYCLECONFIGURATION,
      () => new S3CONTROL_BucketLifecycleConfiguration(),
    ],
    [
      AWS_ResourceType.S3CONTROL_BUCKETPOLICY,
      () => new S3CONTROL_BucketPolicy(),
    ],
    [
      AWS_ResourceType.S3CONTROL_MULTIREGIONACCESSPOINT,
      () => new S3CONTROL_MultiRegionAccessPoint(),
    ],
    [
      AWS_ResourceType.S3CONTROL_MULTIREGIONACCESSPOINTPOLICY,
      () => new S3CONTROL_MultiRegionAccessPointPolicy(),
    ],
    [
      AWS_ResourceType.S3CONTROL_OBJECTLAMBDAACCESSPOINT,
      () => new S3CONTROL_ObjectLambdaAccessPoint(),
    ],
    [
      AWS_ResourceType.S3CONTROL_OBJECTLAMBDAACCESSPOINTPOLICY,
      () => new S3CONTROL_ObjectLambdaAccessPointPolicy(),
    ],
    [
      AWS_ResourceType.S3CONTROL_STORAGELENSCONFIGURATION,
      () => new S3CONTROL_StorageLensConfiguration(),
    ],
    [AWS_ResourceType.S3OUTPOSTS_ENDPOINT, () => new S3OUTPOSTS_Endpoint()],
    [AWS_ResourceType.SAGEMAKER_APP, () => new SAGEMAKER_App()],
    [
      AWS_ResourceType.SAGEMAKER_APPIMAGECONFIG,
      () => new SAGEMAKER_AppImageConfig(),
    ],
    [
      AWS_ResourceType.SAGEMAKER_CODEREPOSITORY,
      () => new SAGEMAKER_CodeRepository(),
    ],
    [
      AWS_ResourceType.SAGEMAKER_DATAQUALITYJOBDEFINITION,
      () => new SAGEMAKER_DataQualityJobDefinition(),
    ],
    [AWS_ResourceType.SAGEMAKER_DEVICE, () => new SAGEMAKER_Device()],
    [AWS_ResourceType.SAGEMAKER_DEVICEFLEET, () => new SAGEMAKER_DeviceFleet()],
    [AWS_ResourceType.SAGEMAKER_DOMAIN, () => new SAGEMAKER_Domain()],
    [AWS_ResourceType.SAGEMAKER_ENDPOINT, () => new SAGEMAKER_Endpoint()],
    [
      AWS_ResourceType.SAGEMAKER_ENDPOINTCONFIGURATION,
      () => new SAGEMAKER_EndpointConfiguration(),
    ],
    [
      AWS_ResourceType.SAGEMAKER_FEATUREGROUP,
      () => new SAGEMAKER_FeatureGroup(),
    ],
    [
      AWS_ResourceType.SAGEMAKER_FLOWDEFINITION,
      () => new SAGEMAKER_FlowDefinition(),
    ],
    [AWS_ResourceType.SAGEMAKER_HUMANTASKUI, () => new SAGEMAKER_HumanTaskUI()],
    [AWS_ResourceType.SAGEMAKER_IMAGE, () => new SAGEMAKER_Image()],
    [
      AWS_ResourceType.SAGEMAKER_IMAGEVERSION,
      () => new SAGEMAKER_ImageVersion(),
    ],
    [AWS_ResourceType.SAGEMAKER_MODEL, () => new SAGEMAKER_Model()],
    [
      AWS_ResourceType.SAGEMAKER_MODELPACKAGEGROUP,
      () => new SAGEMAKER_ModelPackageGroup(),
    ],
    [
      AWS_ResourceType.SAGEMAKER_MODELPACKAGEGROUPPOLICY,
      () => new SAGEMAKER_ModelPackageGroupPolicy(),
    ],
    [
      AWS_ResourceType.SAGEMAKER_MONITORINGSCHEDULE,
      () => new SAGEMAKER_MonitoringSchedule(),
    ],
    [
      AWS_ResourceType.SAGEMAKER_NOTEBOOKINSTANCE,
      () => new SAGEMAKER_NotebookInstance(),
    ],
    [
      AWS_ResourceType.SAGEMAKER_NOTEBOOKINSTANCELIFECYCLECONFIGURATION,
      () => new SAGEMAKER_NotebookInstanceLifecycleConfiguration(),
    ],
    [AWS_ResourceType.SAGEMAKER_PIPELINE, () => new SAGEMAKER_Pipeline()],
    [AWS_ResourceType.SAGEMAKER_PROJECT, () => new SAGEMAKER_Project()],
    [
      AWS_ResourceType.SAGEMAKER_SERVICECATALOGPORTFOLIOSTATUS,
      () => new SAGEMAKER_ServicecatalogPortfolioStatus(),
    ],
    [AWS_ResourceType.SAGEMAKER_SPACE, () => new SAGEMAKER_Space()],
    [
      AWS_ResourceType.SAGEMAKER_STUDIOLIFECYCLECONFIG,
      () => new SAGEMAKER_StudioLifecycleConfig(),
    ],
    [AWS_ResourceType.SAGEMAKER_USERPROFILE, () => new SAGEMAKER_UserProfile()],
    [AWS_ResourceType.SAGEMAKER_WORKFORCE, () => new SAGEMAKER_Workforce()],
    [AWS_ResourceType.SAGEMAKER_WORKTEAM, () => new SAGEMAKER_Workteam()],
    [AWS_ResourceType.SCHEDULER_SCHEDULE, () => new SCHEDULER_Schedule()],
    [
      AWS_ResourceType.SCHEDULER_SCHEDULEGROUP,
      () => new SCHEDULER_ScheduleGroup(),
    ],
    [AWS_ResourceType.SCHEMAS_DISCOVERER, () => new SCHEMAS_Discoverer()],
    [AWS_ResourceType.SCHEMAS_REGISTRY, () => new SCHEMAS_Registry()],
    [
      AWS_ResourceType.SCHEMAS_REGISTRYPOLICY,
      () => new SCHEMAS_RegistryPolicy(),
    ],
    [AWS_ResourceType.SCHEMAS_SCHEMA, () => new SCHEMAS_Schema()],
    [AWS_ResourceType.SECRETSMANAGER_SECRET, () => new SECRETSMANAGER_Secret()],
    [
      AWS_ResourceType.SECRETSMANAGER_SECRETPOLICY,
      () => new SECRETSMANAGER_SecretPolicy(),
    ],
    [
      AWS_ResourceType.SECRETSMANAGER_SECRETROTATION,
      () => new SECRETSMANAGER_SecretRotation(),
    ],
    [
      AWS_ResourceType.SECRETSMANAGER_SECRETVERSION,
      () => new SECRETSMANAGER_SecretVersion(),
    ],
    [AWS_ResourceType.SECURITYHUB_ACCOUNT, () => new SECURITYHUB_Account()],
    [
      AWS_ResourceType.SECURITYHUB_ACTIONTARGET,
      () => new SECURITYHUB_ActionTarget(),
    ],
    [
      AWS_ResourceType.SECURITYHUB_AUTOMATIONRULE,
      () => new SECURITYHUB_AutomationRule(),
    ],
    [
      AWS_ResourceType.SECURITYHUB_FINDINGAGGREGATOR,
      () => new SECURITYHUB_FindingAggregator(),
    ],
    [AWS_ResourceType.SECURITYHUB_INSIGHT, () => new SECURITYHUB_Insight()],
    [
      AWS_ResourceType.SECURITYHUB_INVITEACCEPTER,
      () => new SECURITYHUB_InviteAccepter(),
    ],
    [AWS_ResourceType.SECURITYHUB_MEMBER, () => new SECURITYHUB_Member()],
    [
      AWS_ResourceType.SECURITYHUB_ORGANIZATIONADMINACCOUNT,
      () => new SECURITYHUB_OrganizationAdminAccount(),
    ],
    [
      AWS_ResourceType.SECURITYHUB_ORGANIZATIONCONFIGURATION,
      () => new SECURITYHUB_OrganizationConfiguration(),
    ],
    [
      AWS_ResourceType.SECURITYHUB_PRODUCTSUBSCRIPTION,
      () => new SECURITYHUB_ProductSubscription(),
    ],
    [
      AWS_ResourceType.SECURITYHUB_STANDARDSCONTROL,
      () => new SECURITYHUB_StandardsControl(),
    ],
    [
      AWS_ResourceType.SECURITYHUB_STANDARDSSUBSCRIPTION,
      () => new SECURITYHUB_StandardsSubscription(),
    ],
    [
      AWS_ResourceType.SECURITYLAKE_AWSLOGSOURCE,
      () => new SECURITYLAKE_AwsLogSource(),
    ],
    [
      AWS_ResourceType.SECURITYLAKE_CUSTOMLOGSOURCE,
      () => new SECURITYLAKE_CustomLogSource(),
    ],
    [AWS_ResourceType.SECURITYLAKE_DATALAKE, () => new SECURITYLAKE_DataLake()],
    [
      AWS_ResourceType.SERVERLESSREPOSITORY_CLOUDFORMATIONSTACK,
      () => new SERVERLESSREPOSITORY_CloudFormationStack(),
    ],
    [
      AWS_ResourceType.SERVICECATALOG_BUDGETRESOURCEASSOCIATION,
      () => new SERVICECATALOG_BudgetResourceAssociation(),
    ],
    [
      AWS_ResourceType.SERVICECATALOG_CONSTRAINT,
      () => new SERVICECATALOG_Constraint(),
    ],
    [
      AWS_ResourceType.SERVICECATALOG_ORGANIZATIONSACCESS,
      () => new SERVICECATALOG_OrganizationsAccess(),
    ],
    [
      AWS_ResourceType.SERVICECATALOG_PORTFOLIO,
      () => new SERVICECATALOG_Portfolio(),
    ],
    [
      AWS_ResourceType.SERVICECATALOG_PORTFOLIOSHARE,
      () => new SERVICECATALOG_PortfolioShare(),
    ],
    [
      AWS_ResourceType.SERVICECATALOG_PRINCIPALPORTFOLIOASSOCIATION,
      () => new SERVICECATALOG_PrincipalPortfolioAssociation(),
    ],
    [
      AWS_ResourceType.SERVICECATALOG_PRODUCT,
      () => new SERVICECATALOG_Product(),
    ],
    [
      AWS_ResourceType.SERVICECATALOG_PRODUCTPORTFOLIOASSOCIATION,
      () => new SERVICECATALOG_ProductPortfolioAssociation(),
    ],
    [
      AWS_ResourceType.SERVICECATALOG_PROVISIONEDPRODUCT,
      () => new SERVICECATALOG_ProvisionedProduct(),
    ],
    [
      AWS_ResourceType.SERVICECATALOG_PROVISIONINGARTIFACT,
      () => new SERVICECATALOG_ProvisioningArtifact(),
    ],
    [
      AWS_ResourceType.SERVICECATALOG_SERVICEACTION,
      () => new SERVICECATALOG_ServiceAction(),
    ],
    [
      AWS_ResourceType.SERVICECATALOG_TAGOPTION,
      () => new SERVICECATALOG_TagOption(),
    ],
    [
      AWS_ResourceType.SERVICECATALOG_TAGOPTIONRESOURCEASSOCIATION,
      () => new SERVICECATALOG_TagOptionResourceAssociation(),
    ],
    [
      AWS_ResourceType.SERVICEDISCOVERY_HTTPNAMESPACE,
      () => new SERVICEDISCOVERY_HttpNamespace(),
    ],
    [
      AWS_ResourceType.SERVICEDISCOVERY_INSTANCE,
      () => new SERVICEDISCOVERY_Instance(),
    ],
    [
      AWS_ResourceType.SERVICEDISCOVERY_PRIVATEDNSNAMESPACE,
      () => new SERVICEDISCOVERY_PrivateDnsNamespace(),
    ],
    [
      AWS_ResourceType.SERVICEDISCOVERY_PUBLICDNSNAMESPACE,
      () => new SERVICEDISCOVERY_PublicDnsNamespace(),
    ],
    [
      AWS_ResourceType.SERVICEDISCOVERY_SERVICE,
      () => new SERVICEDISCOVERY_Service(),
    ],
    [
      AWS_ResourceType.SERVICEQUOTAS_SERVICEQUOTA,
      () => new SERVICEQUOTAS_ServiceQuota(),
    ],
    [
      AWS_ResourceType.SERVICEQUOTAS_TEMPLATE,
      () => new SERVICEQUOTAS_Template(),
    ],
    [
      AWS_ResourceType.SERVICEQUOTAS_TEMPLATEASSOCIATION,
      () => new SERVICEQUOTAS_TemplateAssociation(),
    ],
    [
      AWS_ResourceType.SES_ACTIVERECEIPTRULESET,
      () => new SES_ActiveReceiptRuleSet(),
    ],
    [AWS_ResourceType.SES_CONFIGURATIONSET, () => new SES_ConfigurationSet()],
    [AWS_ResourceType.SES_DOMAINDKIM, () => new SES_DomainDkim()],
    [AWS_ResourceType.SES_DOMAINIDENTITY, () => new SES_DomainIdentity()],
    [
      AWS_ResourceType.SES_DOMAINIDENTITYVERIFICATION,
      () => new SES_DomainIdentityVerification(),
    ],
    [AWS_ResourceType.SES_EMAILIDENTITY, () => new SES_EmailIdentity()],
    [AWS_ResourceType.SES_EVENTDESTINATION, () => new SES_EventDestination()],
    [
      AWS_ResourceType.SES_IDENTITYNOTIFICATIONTOPIC,
      () => new SES_IdentityNotificationTopic(),
    ],
    [AWS_ResourceType.SES_IDENTITYPOLICY, () => new SES_IdentityPolicy()],
    [AWS_ResourceType.SES_MAILFROM, () => new SES_MailFrom()],
    [AWS_ResourceType.SES_RECEIPTFILTER, () => new SES_ReceiptFilter()],
    [AWS_ResourceType.SES_RECEIPTRULE, () => new SES_ReceiptRule()],
    [AWS_ResourceType.SES_RECEIPTRULESET, () => new SES_ReceiptRuleSet()],
    [AWS_ResourceType.SES_TEMPLATE, () => new SES_Template()],
    [
      AWS_ResourceType.SESV2_ACCOUNTVDMATTRIBUTES,
      () => new SESV2_AccountVdmAttributes(),
    ],
    [
      AWS_ResourceType.SESV2_CONFIGURATIONSET,
      () => new SESV2_ConfigurationSet(),
    ],
    [
      AWS_ResourceType.SESV2_CONFIGURATIONSETEVENTDESTINATION,
      () => new SESV2_ConfigurationSetEventDestination(),
    ],
    [AWS_ResourceType.SESV2_CONTACTLIST, () => new SESV2_ContactList()],
    [
      AWS_ResourceType.SESV2_DEDICATEDIPASSIGNMENT,
      () => new SESV2_DedicatedIpAssignment(),
    ],
    [AWS_ResourceType.SESV2_DEDICATEDIPPOOL, () => new SESV2_DedicatedIpPool()],
    [AWS_ResourceType.SESV2_EMAILIDENTITY, () => new SESV2_EmailIdentity()],
    [
      AWS_ResourceType.SESV2_EMAILIDENTITYFEEDBACKATTRIBUTES,
      () => new SESV2_EmailIdentityFeedbackAttributes(),
    ],
    [
      AWS_ResourceType.SESV2_EMAILIDENTITYMAILFROMATTRIBUTES,
      () => new SESV2_EmailIdentityMailFromAttributes(),
    ],
    [
      AWS_ResourceType.SESV2_EMAILIDENTITYPOLICY,
      () => new SESV2_EmailIdentityPolicy(),
    ],
    [AWS_ResourceType.SFN_ACTIVITY, () => new SFN_Activity()],
    [AWS_ResourceType.SFN_ALIAS, () => new SFN_Alias()],
    [AWS_ResourceType.SFN_STATEMACHINE, () => new SFN_StateMachine()],
    [
      AWS_ResourceType.SHIELD_APPLICATIONLAYERAUTOMATICRESPONSE,
      () => new SHIELD_ApplicationLayerAutomaticResponse(),
    ],
    [
      AWS_ResourceType.SHIELD_DRTACCESSLOGBUCKETASSOCIATION,
      () => new SHIELD_DrtAccessLogBucketAssociation(),
    ],
    [
      AWS_ResourceType.SHIELD_DRTACCESSROLEARNASSOCIATION,
      () => new SHIELD_DrtAccessRoleArnAssociation(),
    ],
    [
      AWS_ResourceType.SHIELD_PROACTIVEENGAGEMENT,
      () => new SHIELD_ProactiveEngagement(),
    ],
    [AWS_ResourceType.SHIELD_PROTECTION, () => new SHIELD_Protection()],
    [
      AWS_ResourceType.SHIELD_PROTECTIONGROUP,
      () => new SHIELD_ProtectionGroup(),
    ],
    [
      AWS_ResourceType.SHIELD_PROTECTIONHEALTHCHECKASSOCIATION,
      () => new SHIELD_ProtectionHealthCheckAssociation(),
    ],
    [AWS_ResourceType.SIGNER_SIGNINGJOB, () => new SIGNER_SigningJob()],
    [AWS_ResourceType.SIGNER_SIGNINGPROFILE, () => new SIGNER_SigningProfile()],
    [
      AWS_ResourceType.SIGNER_SIGNINGPROFILEPERMISSION,
      () => new SIGNER_SigningProfilePermission(),
    ],
    [AWS_ResourceType.SIMPLEDB_DOMAIN, () => new SIMPLEDB_Domain()],
    [
      AWS_ResourceType.SNS_DATAPROTECTIONPOLICY,
      () => new SNS_DataProtectionPolicy(),
    ],
    [
      AWS_ResourceType.SNS_PLATFORMAPPLICATION,
      () => new SNS_PlatformApplication(),
    ],
    [AWS_ResourceType.SNS_SMSPREFERENCES, () => new SNS_SmsPreferences()],
    [AWS_ResourceType.SNS_TOPIC, () => new SNS_Topic()],
    [AWS_ResourceType.SNS_TOPICPOLICY, () => new SNS_TopicPolicy()],
    [AWS_ResourceType.SNS_TOPICSUBSCRIPTION, () => new SNS_TopicSubscription()],
    [AWS_ResourceType.SQS_QUEUE, () => new SQS_Queue()],
    [AWS_ResourceType.SQS_QUEUEPOLICY, () => new SQS_QueuePolicy()],
    [
      AWS_ResourceType.SQS_REDRIVEALLOWPOLICY,
      () => new SQS_RedriveAllowPolicy(),
    ],
    [AWS_ResourceType.SQS_REDRIVEPOLICY, () => new SQS_RedrivePolicy()],
    [AWS_ResourceType.SSM_ACTIVATION, () => new SSM_Activation()],
    [AWS_ResourceType.SSM_ASSOCIATION, () => new SSM_Association()],
    [AWS_ResourceType.SSM_CONTACTSROTATION, () => new SSM_ContactsRotation()],
    [
      AWS_ResourceType.SSM_DEFAULTPATCHBASELINE,
      () => new SSM_DefaultPatchBaseline(),
    ],
    [AWS_ResourceType.SSM_DOCUMENT, () => new SSM_Document()],
    [AWS_ResourceType.SSM_MAINTENANCEWINDOW, () => new SSM_MaintenanceWindow()],
    [
      AWS_ResourceType.SSM_MAINTENANCEWINDOWTARGET,
      () => new SSM_MaintenanceWindowTarget(),
    ],
    [
      AWS_ResourceType.SSM_MAINTENANCEWINDOWTASK,
      () => new SSM_MaintenanceWindowTask(),
    ],
    [AWS_ResourceType.SSM_PARAMETER, () => new SSM_Parameter()],
    [AWS_ResourceType.SSM_PATCHBASELINE, () => new SSM_PatchBaseline()],
    [AWS_ResourceType.SSM_PATCHGROUP, () => new SSM_PatchGroup()],
    [AWS_ResourceType.SSM_RESOURCEDATASYNC, () => new SSM_ResourceDataSync()],
    [AWS_ResourceType.SSM_SERVICESETTING, () => new SSM_ServiceSetting()],
    [AWS_ResourceType.SSMCONTACTS_CONTACT, () => new SSMCONTACTS_Contact()],
    [
      AWS_ResourceType.SSMCONTACTS_CONTACTCHANNEL,
      () => new SSMCONTACTS_ContactChannel(),
    ],
    [AWS_ResourceType.SSMCONTACTS_PLAN, () => new SSMCONTACTS_Plan()],
    [
      AWS_ResourceType.SSMINCIDENTS_REPLICATIONSET,
      () => new SSMINCIDENTS_ReplicationSet(),
    ],
    [
      AWS_ResourceType.SSMINCIDENTS_RESPONSEPLAN,
      () => new SSMINCIDENTS_ResponsePlan(),
    ],
    [
      AWS_ResourceType.SSOADMIN_ACCOUNTASSIGNMENT,
      () => new SSOADMIN_AccountAssignment(),
    ],
    [AWS_ResourceType.SSOADMIN_APPLICATION, () => new SSOADMIN_Application()],
    [
      AWS_ResourceType.SSOADMIN_APPLICATIONACCESSSCOPE,
      () => new SSOADMIN_ApplicationAccessScope(),
    ],
    [
      AWS_ResourceType.SSOADMIN_APPLICATIONASSIGNMENT,
      () => new SSOADMIN_ApplicationAssignment(),
    ],
    [
      AWS_ResourceType.SSOADMIN_APPLICATIONASSIGNMENTCONFIGURATION,
      () => new SSOADMIN_ApplicationAssignmentConfiguration(),
    ],
    [
      AWS_ResourceType.SSOADMIN_CUSTOMERMANAGEDPOLICYATTACHMENT,
      () => new SSOADMIN_CustomerManagedPolicyAttachment(),
    ],
    [
      AWS_ResourceType.SSOADMIN_INSTANCEACCESSCONTROLATTRIBUTES,
      () => new SSOADMIN_InstanceAccessControlAttributes(),
    ],
    [
      AWS_ResourceType.SSOADMIN_MANAGEDPOLICYATTACHMENT,
      () => new SSOADMIN_ManagedPolicyAttachment(),
    ],
    [
      AWS_ResourceType.SSOADMIN_PERMISSIONSBOUNDARYATTACHMENT,
      () => new SSOADMIN_PermissionsBoundaryAttachment(),
    ],
    [
      AWS_ResourceType.SSOADMIN_PERMISSIONSET,
      () => new SSOADMIN_PermissionSet(),
    ],
    [
      AWS_ResourceType.SSOADMIN_PERMISSIONSETINLINEPOLICY,
      () => new SSOADMIN_PermissionSetInlinePolicy(),
    ],
    [
      AWS_ResourceType.SSOADMIN_TRUSTEDTOKENISSUER,
      () => new SSOADMIN_TrustedTokenIssuer(),
    ],
    [AWS_ResourceType.STORAGEGATEWAY_CACHE, () => new STORAGEGATEWAY_Cache()],
    [
      AWS_ResourceType.STORAGEGATEWAY_CACHESISCSIVOLUME,
      () => new STORAGEGATEWAY_CachesIscsiVolume(),
    ],
    [
      AWS_ResourceType.STORAGEGATEWAY_FILESYSTEMASSOCIATION,
      () => new STORAGEGATEWAY_FileSystemAssociation(),
    ],
    [
      AWS_ResourceType.STORAGEGATEWAY_GATEWAY,
      () => new STORAGEGATEWAY_Gateway(),
    ],
    [
      AWS_ResourceType.STORAGEGATEWAY_NFSFILESHARE,
      () => new STORAGEGATEWAY_NfsFileShare(),
    ],
    [
      AWS_ResourceType.STORAGEGATEWAY_SMBFILESHARE,
      () => new STORAGEGATEWAY_SmbFileShare(),
    ],
    [
      AWS_ResourceType.STORAGEGATEWAY_STOREDISCSIVOLUME,
      () => new STORAGEGATEWAY_StoredIscsiVolume(),
    ],
    [
      AWS_ResourceType.STORAGEGATEWAY_TAPEPOOL,
      () => new STORAGEGATEWAY_TapePool(),
    ],
    [
      AWS_ResourceType.STORAGEGATEWAY_UPLOADBUFFER,
      () => new STORAGEGATEWAY_UploadBuffer(),
    ],
    [
      AWS_ResourceType.STORAGEGATEWAY_WORKINGSTORAGE,
      () => new STORAGEGATEWAY_WorkingStorage(),
    ],
    [AWS_ResourceType.SWF_DOMAIN, () => new SWF_Domain()],
    [AWS_ResourceType.SYNTHETICS_CANARY, () => new SYNTHETICS_Canary()],
    [AWS_ResourceType.SYNTHETICS_GROUP, () => new SYNTHETICS_Group()],
    [
      AWS_ResourceType.SYNTHETICS_GROUPASSOCIATION,
      () => new SYNTHETICS_GroupAssociation(),
    ],
    [
      AWS_ResourceType.TIMESTREAMWRITE_DATABASE,
      () => new TIMESTREAMWRITE_Database(),
    ],
    [AWS_ResourceType.TIMESTREAMWRITE_TABLE, () => new TIMESTREAMWRITE_Table()],
    [
      AWS_ResourceType.TRANSCRIBE_LANGUAGEMODEL,
      () => new TRANSCRIBE_LanguageModel(),
    ],
    [
      AWS_ResourceType.TRANSCRIBE_MEDICALVOCABULARY,
      () => new TRANSCRIBE_MedicalVocabulary(),
    ],
    [AWS_ResourceType.TRANSCRIBE_VOCABULARY, () => new TRANSCRIBE_Vocabulary()],
    [
      AWS_ResourceType.TRANSCRIBE_VOCABULARYFILTER,
      () => new TRANSCRIBE_VocabularyFilter(),
    ],
    [AWS_ResourceType.TRANSFER_ACCESS, () => new TRANSFER_Access()],
    [AWS_ResourceType.TRANSFER_AGREEMENT, () => new TRANSFER_Agreement()],
    [AWS_ResourceType.TRANSFER_CERTIFICATE, () => new TRANSFER_Certificate()],
    [AWS_ResourceType.TRANSFER_CONNECTOR, () => new TRANSFER_Connector()],
    [AWS_ResourceType.TRANSFER_PROFILE, () => new TRANSFER_Profile()],
    [AWS_ResourceType.TRANSFER_SERVER, () => new TRANSFER_Server()],
    [AWS_ResourceType.TRANSFER_SSHKEY, () => new TRANSFER_SshKey()],
    [AWS_ResourceType.TRANSFER_TAG, () => new TRANSFER_Tag()],
    [AWS_ResourceType.TRANSFER_USER, () => new TRANSFER_User()],
    [AWS_ResourceType.TRANSFER_WORKFLOW, () => new TRANSFER_Workflow()],
    [
      AWS_ResourceType.VERIFIEDACCESS_ENDPOINT,
      () => new VERIFIEDACCESS_Endpoint(),
    ],
    [AWS_ResourceType.VERIFIEDACCESS_GROUP, () => new VERIFIEDACCESS_Group()],
    [
      AWS_ResourceType.VERIFIEDACCESS_INSTANCE,
      () => new VERIFIEDACCESS_Instance(),
    ],
    [
      AWS_ResourceType.VERIFIEDACCESS_INSTANCELOGGINGCONFIGURATION,
      () => new VERIFIEDACCESS_InstanceLoggingConfiguration(),
    ],
    [
      AWS_ResourceType.VERIFIEDACCESS_INSTANCETRUSTPROVIDERATTACHMENT,
      () => new VERIFIEDACCESS_InstanceTrustProviderAttachment(),
    ],
    [
      AWS_ResourceType.VERIFIEDACCESS_TRUSTPROVIDER,
      () => new VERIFIEDACCESS_TrustProvider(),
    ],
    [
      AWS_ResourceType.VERIFIEDPERMISSIONS_POLICYSTORE,
      () => new VERIFIEDPERMISSIONS_PolicyStore(),
    ],
    [
      AWS_ResourceType.VERIFIEDPERMISSIONS_POLICYTEMPLATE,
      () => new VERIFIEDPERMISSIONS_PolicyTemplate(),
    ],
    [
      AWS_ResourceType.VERIFIEDPERMISSIONS_SCHEMA,
      () => new VERIFIEDPERMISSIONS_Schema(),
    ],
    [
      AWS_ResourceType.VPC_SECURITYGROUPEGRESSRULE,
      () => new VPC_SecurityGroupEgressRule(),
    ],
    [
      AWS_ResourceType.VPC_SECURITYGROUPINGRESSRULE,
      () => new VPC_SecurityGroupIngressRule(),
    ],
    [
      AWS_ResourceType.VPCLATTICE_ACCESSLOGSUBSCRIPTION,
      () => new VPCLATTICE_AccessLogSubscription(),
    ],
    [AWS_ResourceType.VPCLATTICE_AUTHPOLICY, () => new VPCLATTICE_AuthPolicy()],
    [AWS_ResourceType.VPCLATTICE_LISTENER, () => new VPCLATTICE_Listener()],
    [
      AWS_ResourceType.VPCLATTICE_LISTENERRULE,
      () => new VPCLATTICE_ListenerRule(),
    ],
    [
      AWS_ResourceType.VPCLATTICE_RESOURCEPOLICY,
      () => new VPCLATTICE_ResourcePolicy(),
    ],
    [AWS_ResourceType.VPCLATTICE_SERVICE, () => new VPCLATTICE_Service()],
    [
      AWS_ResourceType.VPCLATTICE_SERVICENETWORK,
      () => new VPCLATTICE_ServiceNetwork(),
    ],
    [
      AWS_ResourceType.VPCLATTICE_SERVICENETWORKSERVICEASSOCIATION,
      () => new VPCLATTICE_ServiceNetworkServiceAssociation(),
    ],
    [
      AWS_ResourceType.VPCLATTICE_SERVICENETWORKVPCASSOCIATION,
      () => new VPCLATTICE_ServiceNetworkVpcAssociation(),
    ],
    [
      AWS_ResourceType.VPCLATTICE_TARGETGROUP,
      () => new VPCLATTICE_TargetGroup(),
    ],
    [
      AWS_ResourceType.VPCLATTICE_TARGETGROUPATTACHMENT,
      () => new VPCLATTICE_TargetGroupAttachment(),
    ],
    [AWS_ResourceType.WAF_BYTEMATCHSET, () => new WAF_ByteMatchSet()],
    [AWS_ResourceType.WAF_GEOMATCHSET, () => new WAF_GeoMatchSet()],
    [AWS_ResourceType.WAF_IPSET, () => new WAF_IpSet()],
    [AWS_ResourceType.WAF_RATEBASEDRULE, () => new WAF_RateBasedRule()],
    [AWS_ResourceType.WAF_REGEXMATCHSET, () => new WAF_RegexMatchSet()],
    [AWS_ResourceType.WAF_REGEXPATTERNSET, () => new WAF_RegexPatternSet()],
    [AWS_ResourceType.WAF_RULE, () => new WAF_Rule()],
    [AWS_ResourceType.WAF_RULEGROUP, () => new WAF_RuleGroup()],
    [AWS_ResourceType.WAF_SIZECONSTRAINTSET, () => new WAF_SizeConstraintSet()],
    [
      AWS_ResourceType.WAF_SQLINJECTIONMATCHSET,
      () => new WAF_SqlInjectionMatchSet(),
    ],
    [AWS_ResourceType.WAF_WEBACL, () => new WAF_WebAcl()],
    [AWS_ResourceType.WAF_XSSMATCHSET, () => new WAF_XssMatchSet()],
    [
      AWS_ResourceType.WAFREGIONAL_BYTEMATCHSET,
      () => new WAFREGIONAL_ByteMatchSet(),
    ],
    [
      AWS_ResourceType.WAFREGIONAL_GEOMATCHSET,
      () => new WAFREGIONAL_GeoMatchSet(),
    ],
    [AWS_ResourceType.WAFREGIONAL_IPSET, () => new WAFREGIONAL_IpSet()],
    [
      AWS_ResourceType.WAFREGIONAL_RATEBASEDRULE,
      () => new WAFREGIONAL_RateBasedRule(),
    ],
    [
      AWS_ResourceType.WAFREGIONAL_REGEXMATCHSET,
      () => new WAFREGIONAL_RegexMatchSet(),
    ],
    [
      AWS_ResourceType.WAFREGIONAL_REGEXPATTERNSET,
      () => new WAFREGIONAL_RegexPatternSet(),
    ],
    [AWS_ResourceType.WAFREGIONAL_RULE, () => new WAFREGIONAL_Rule()],
    [AWS_ResourceType.WAFREGIONAL_RULEGROUP, () => new WAFREGIONAL_RuleGroup()],
    [
      AWS_ResourceType.WAFREGIONAL_SIZECONSTRAINTSET,
      () => new WAFREGIONAL_SizeConstraintSet(),
    ],
    [
      AWS_ResourceType.WAFREGIONAL_SQLINJECTIONMATCHSET,
      () => new WAFREGIONAL_SqlInjectionMatchSet(),
    ],
    [AWS_ResourceType.WAFREGIONAL_WEBACL, () => new WAFREGIONAL_WebAcl()],
    [
      AWS_ResourceType.WAFREGIONAL_WEBACLASSOCIATION,
      () => new WAFREGIONAL_WebAclAssociation(),
    ],
    [
      AWS_ResourceType.WAFREGIONAL_XSSMATCHSET,
      () => new WAFREGIONAL_XssMatchSet(),
    ],
    [AWS_ResourceType.WAFV2_IPSET, () => new WAFV2_IpSet()],
    [AWS_ResourceType.WAFV2_REGEXPATTERNSET, () => new WAFV2_RegexPatternSet()],
    [AWS_ResourceType.WAFV2_RULEGROUP, () => new WAFV2_RuleGroup()],
    [AWS_ResourceType.WAFV2_WEBACL, () => new WAFV2_WebAcl()],
    [
      AWS_ResourceType.WAFV2_WEBACLASSOCIATION,
      () => new WAFV2_WebAclAssociation(),
    ],
    [
      AWS_ResourceType.WAFV2_WEBACLLOGGINGCONFIGURATION,
      () => new WAFV2_WebAclLoggingConfiguration(),
    ],
    [AWS_ResourceType.WORKLINK_FLEET, () => new WORKLINK_Fleet()],
    [
      AWS_ResourceType.WORKLINK_WEBSITECERTIFICATEAUTHORITYASSOCIATION,
      () => new WORKLINK_WebsiteCertificateAuthorityAssociation(),
    ],
    [
      AWS_ResourceType.WORKSPACES_CONNECTIONALIAS,
      () => new WORKSPACES_ConnectionAlias(),
    ],
    [AWS_ResourceType.WORKSPACES_DIRECTORY, () => new WORKSPACES_Directory()],
    [AWS_ResourceType.WORKSPACES_IPGROUP, () => new WORKSPACES_IpGroup()],
    [AWS_ResourceType.WORKSPACES_WORKSPACE, () => new WORKSPACES_Workspace()],
    [AWS_ResourceType.XRAY_ENCRYPTIONCONFIG, () => new XRAY_EncryptionConfig()],
    [AWS_ResourceType.XRAY_GROUP, () => new XRAY_Group()],
    [AWS_ResourceType.XRAY_SAMPLINGRULE, () => new XRAY_SamplingRule()],
  ]);

  public static GetResourceObject(resType: AWS_ResourceType): Resource {

    let map = this.ResourceFactoryMap1.get(resType) 
    if(map == undefined){
      map = this.ResourceFactoryMap2.get(resType)
    }
    return (map as () => Resource)();
  }

  public static propertiesMap1 = new Map<AWS_ResourceType, DynamicUIProps[]>([
    [
      AWS_ResourceType.ACCESSANALYZER_ANALYZER,
      ACCESSANALYZER_Analyzer.GetTypes(),
    ],
    [
      AWS_ResourceType.ACCESSANALYZER_ARCHIVERULE,
      ACCESSANALYZER_ArchiveRule.GetTypes(),
    ],
    [
      AWS_ResourceType.ACCOUNT_ALTERNATIVECONTACT,
      ACCOUNT_AlternativeContact.GetTypes(),
    ],
    [
      AWS_ResourceType.ACCOUNT_PRIMARYCONTACT,
      ACCOUNT_PrimaryContact.GetTypes(),
    ],
    [AWS_ResourceType.ACM_CERTIFICATE, ACM_Certificate.GetTypes()],
    [
      AWS_ResourceType.ACM_CERTIFICATEVALIDATION,
      ACM_CertificateValidation.GetTypes(),
    ],
    [AWS_ResourceType.ACMPCA_CERTIFICATE, ACMPCA_Certificate.GetTypes()],
    [
      AWS_ResourceType.ACMPCA_CERTIFICATEAUTHORITY,
      ACMPCA_CertificateAuthority.GetTypes(),
    ],
    [
      AWS_ResourceType.ACMPCA_CERTIFICATEAUTHORITYCERTIFICATE,
      ACMPCA_CertificateAuthorityCertificate.GetTypes(),
    ],
    [AWS_ResourceType.ACMPCA_PERMISSION, ACMPCA_Permission.GetTypes()],
    [AWS_ResourceType.ACMPCA_POLICY, ACMPCA_Policy.GetTypes()],
    [AWS_ResourceType.ALB_LISTENER, ALB_Listener.GetTypes()],
    [
      AWS_ResourceType.ALB_LISTENERCERTIFICATE,
      ALB_ListenerCertificate.GetTypes(),
    ],
    [AWS_ResourceType.ALB_LISTENERRULE, ALB_ListenerRule.GetTypes()],
    [AWS_ResourceType.ALB_LOADBALANCER, ALB_LoadBalancer.GetTypes()],
    [AWS_ResourceType.ALB_TARGETGROUP, ALB_TargetGroup.GetTypes()],
    [
      AWS_ResourceType.ALB_TARGETGROUPATTACHMENT,
      ALB_TargetGroupAttachment.GetTypes(),
    ],
    [
      AWS_ResourceType.AMP_ALERTMANAGERDEFINITION,
      AMP_AlertManagerDefinition.GetTypes(),
    ],
    [
      AWS_ResourceType.AMP_RULEGROUPNAMESPACE,
      AMP_RuleGroupNamespace.GetTypes(),
    ],
    [AWS_ResourceType.AMP_SCRAPER, AMP_Scraper.GetTypes()],
    [AWS_ResourceType.AMP_WORKSPACE, AMP_Workspace.GetTypes()],
    [AWS_ResourceType.AMPLIFY_APP, AMPLIFY_App.GetTypes()],
    [
      AWS_ResourceType.AMPLIFY_BACKENDENVIRONMENT,
      AMPLIFY_BackendEnvironment.GetTypes(),
    ],
    [AWS_ResourceType.AMPLIFY_BRANCH, AMPLIFY_Branch.GetTypes()],
    [
      AWS_ResourceType.AMPLIFY_DOMAINASSOCIATION,
      AMPLIFY_DomainAssociation.GetTypes(),
    ],
    [AWS_ResourceType.AMPLIFY_WEBHOOK, AMPLIFY_Webhook.GetTypes()],
    [AWS_ResourceType.APIGATEWAY_ACCOUNT, APIGATEWAY_Account.GetTypes()],
    [AWS_ResourceType.APIGATEWAY_APIKEY, APIGATEWAY_ApiKey.GetTypes()],
    [AWS_ResourceType.APIGATEWAY_AUTHORIZER, APIGATEWAY_Authorizer.GetTypes()],
    [
      AWS_ResourceType.APIGATEWAY_BASEPATHMAPPING,
      APIGATEWAY_BasePathMapping.GetTypes(),
    ],
    [
      AWS_ResourceType.APIGATEWAY_CLIENTCERTIFICATE,
      APIGATEWAY_ClientCertificate.GetTypes(),
    ],
    [AWS_ResourceType.APIGATEWAY_DEPLOYMENT, APIGATEWAY_Deployment.GetTypes()],
    [
      AWS_ResourceType.APIGATEWAY_DOCUMENTATIONPART,
      APIGATEWAY_DocumentationPart.GetTypes(),
    ],
    [
      AWS_ResourceType.APIGATEWAY_DOCUMENTATIONVERSION,
      APIGATEWAY_DocumentationVersion.GetTypes(),
    ],
    [AWS_ResourceType.APIGATEWAY_DOMAINNAME, APIGATEWAY_DomainName.GetTypes()],
    [
      AWS_ResourceType.APIGATEWAY_INTEGRATION,
      APIGATEWAY_Integration.GetTypes(),
    ],
    [
      AWS_ResourceType.APIGATEWAY_INTEGRATIONRESPONSE,
      APIGATEWAY_IntegrationResponse.GetTypes(),
    ],
    [AWS_ResourceType.APIGATEWAY_METHOD, APIGATEWAY_Method.GetTypes()],
    [
      AWS_ResourceType.APIGATEWAY_METHODRESPONSE,
      APIGATEWAY_MethodResponse.GetTypes(),
    ],
    [
      AWS_ResourceType.APIGATEWAY_METHODSETTINGS,
      APIGATEWAY_MethodSettings.GetTypes(),
    ],
    [AWS_ResourceType.APIGATEWAY_MODEL, APIGATEWAY_Model.GetTypes()],
    [
      AWS_ResourceType.APIGATEWAY_REQUESTVALIDATOR,
      APIGATEWAY_RequestValidator.GetTypes(),
    ],
    [AWS_ResourceType.APIGATEWAY_RESOURCE, APIGATEWAY_Resource.GetTypes()],
    [AWS_ResourceType.APIGATEWAY_RESPONSE, APIGATEWAY_Response.GetTypes()],
    [AWS_ResourceType.APIGATEWAY_RESTAPI, APIGATEWAY_RestApi.GetTypes()],
    [
      AWS_ResourceType.APIGATEWAY_RESTAPIPOLICY,
      APIGATEWAY_RestApiPolicy.GetTypes(),
    ],
    [AWS_ResourceType.APIGATEWAY_STAGE, APIGATEWAY_Stage.GetTypes()],
    [AWS_ResourceType.APIGATEWAY_USAGEPLAN, APIGATEWAY_UsagePlan.GetTypes()],
    [
      AWS_ResourceType.APIGATEWAY_USAGEPLANKEY,
      APIGATEWAY_UsagePlanKey.GetTypes(),
    ],
    [AWS_ResourceType.APIGATEWAY_VPCLINK, APIGATEWAY_VpcLink.GetTypes()],
    [AWS_ResourceType.APIGATEWAYV2_API, APIGATEWAYV2_Api.GetTypes()],
    [
      AWS_ResourceType.APIGATEWAYV2_APIMAPPING,
      APIGATEWAYV2_ApiMapping.GetTypes(),
    ],
    [
      AWS_ResourceType.APIGATEWAYV2_AUTHORIZER,
      APIGATEWAYV2_Authorizer.GetTypes(),
    ],
    [
      AWS_ResourceType.APIGATEWAYV2_DEPLOYMENT,
      APIGATEWAYV2_Deployment.GetTypes(),
    ],
    [
      AWS_ResourceType.APIGATEWAYV2_DOMAINNAME,
      APIGATEWAYV2_DomainName.GetTypes(),
    ],
    [
      AWS_ResourceType.APIGATEWAYV2_INTEGRATION,
      APIGATEWAYV2_Integration.GetTypes(),
    ],
    [
      AWS_ResourceType.APIGATEWAYV2_INTEGRATIONRESPONSE,
      APIGATEWAYV2_IntegrationResponse.GetTypes(),
    ],
    [AWS_ResourceType.APIGATEWAYV2_MODEL, APIGATEWAYV2_Model.GetTypes()],
    [AWS_ResourceType.APIGATEWAYV2_ROUTE, APIGATEWAYV2_Route.GetTypes()],
    [
      AWS_ResourceType.APIGATEWAYV2_ROUTERESPONSE,
      APIGATEWAYV2_RouteResponse.GetTypes(),
    ],
    [AWS_ResourceType.APIGATEWAYV2_STAGE, APIGATEWAYV2_Stage.GetTypes()],
    [AWS_ResourceType.APIGATEWAYV2_VPCLINK, APIGATEWAYV2_VpcLink.GetTypes()],
    [AWS_ResourceType.APPAUTOSCALING_POLICY, APPAUTOSCALING_Policy.GetTypes()],
    [
      AWS_ResourceType.APPAUTOSCALING_SCHEDULEDACTION,
      APPAUTOSCALING_ScheduledAction.GetTypes(),
    ],
    [AWS_ResourceType.APPAUTOSCALING_TARGET, APPAUTOSCALING_Target.GetTypes()],
    [AWS_ResourceType.APPCONFIG_APPLICATION, APPCONFIG_Application.GetTypes()],
    [
      AWS_ResourceType.APPCONFIG_CONFIGURATIONPROFILE,
      APPCONFIG_ConfigurationProfile.GetTypes(),
    ],
    [AWS_ResourceType.APPCONFIG_DEPLOYMENT, APPCONFIG_Deployment.GetTypes()],
    [
      AWS_ResourceType.APPCONFIG_DEPLOYMENTSTRATEGY,
      APPCONFIG_DeploymentStrategy.GetTypes(),
    ],
    [AWS_ResourceType.APPCONFIG_ENVIRONMENT, APPCONFIG_Environment.GetTypes()],
    [
      AWS_ResourceType.APPCONFIG_EVENTINTEGRATION,
      APPCONFIG_EventIntegration.GetTypes(),
    ],
    [AWS_ResourceType.APPCONFIG_EXTENSION, APPCONFIG_Extension.GetTypes()],
    [
      AWS_ResourceType.APPCONFIG_EXTENSIONASSOCIATION,
      APPCONFIG_ExtensionAssociation.GetTypes(),
    ],
    [
      AWS_ResourceType.APPCONFIG_HOSTEDCONFIGURATIONVERSION,
      APPCONFIG_HostedConfigurationVersion.GetTypes(),
    ],
    [
      AWS_ResourceType.APPFLOW_CONNECTORPROFILE,
      APPFLOW_ConnectorProfile.GetTypes(),
    ],
    [AWS_ResourceType.APPFLOW_FLOW, APPFLOW_Flow.GetTypes()],
    [
      AWS_ResourceType.APPINTEGRATIONS_DATAINTEGRATION,
      APPINTEGRATIONS_DataIntegration.GetTypes(),
    ],
    [
      AWS_ResourceType.APPLICATIONINSIGHTS_APPLICATION,
      APPLICATIONINSIGHTS_Application.GetTypes(),
    ],
    [AWS_ResourceType.APPMESH_GATEWAYROUTE, APPMESH_GatewayRoute.GetTypes()],
    [AWS_ResourceType.APPMESH_MESH, APPMESH_Mesh.GetTypes()],
    [AWS_ResourceType.APPMESH_ROUTE, APPMESH_Route.GetTypes()],
    [
      AWS_ResourceType.APPMESH_VIRTUALGATEWAY,
      APPMESH_VirtualGateway.GetTypes(),
    ],
    [AWS_ResourceType.APPMESH_VIRTUALNODE, APPMESH_VirtualNode.GetTypes()],
    [AWS_ResourceType.APPMESH_VIRTUALROUTER, APPMESH_VirtualRouter.GetTypes()],
    [
      AWS_ResourceType.APPMESH_VIRTUALSERVICE,
      APPMESH_VirtualService.GetTypes(),
    ],
    [
      AWS_ResourceType.APPRUNNER_AUTOSCALINGCONFIGURATIONVERSION,
      APPRUNNER_AutoScalingConfigurationVersion.GetTypes(),
    ],
    [AWS_ResourceType.APPRUNNER_CONNECTION, APPRUNNER_Connection.GetTypes()],
    [
      AWS_ResourceType.APPRUNNER_CUSTOMDOMAINASSOCIATION,
      APPRUNNER_CustomDomainAssociation.GetTypes(),
    ],
    [
      AWS_ResourceType.APPRUNNER_DEFAULTAUTOSCALINGCONFIGURATIONVERSION,
      APPRUNNER_DefaultAutoScalingConfigurationVersion.GetTypes(),
    ],
    [AWS_ResourceType.APPRUNNER_DEPLOYMENT, APPRUNNER_Deployment.GetTypes()],
    [
      AWS_ResourceType.APPRUNNER_OBSERVABILITYCONFIGURATION,
      APPRUNNER_ObservabilityConfiguration.GetTypes(),
    ],
    [AWS_ResourceType.APPRUNNER_SERVICE, APPRUNNER_Service.GetTypes()],
    [
      AWS_ResourceType.APPRUNNER_VPCCONNECTOR,
      APPRUNNER_VpcConnector.GetTypes(),
    ],
    [
      AWS_ResourceType.APPRUNNER_VPCINGRESSCONNECTION,
      APPRUNNER_VpcIngressConnection.GetTypes(),
    ],
    [
      AWS_ResourceType.APPSTREAM_DIRECTORYCONFIG,
      APPSTREAM_DirectoryConfig.GetTypes(),
    ],
    [AWS_ResourceType.APPSTREAM_FLEET, APPSTREAM_Fleet.GetTypes()],
    [
      AWS_ResourceType.APPSTREAM_FLEETSTACKASSOCIATION,
      APPSTREAM_FleetStackAssociation.GetTypes(),
    ],
    [
      AWS_ResourceType.APPSTREAM_IMAGEBUILDER,
      APPSTREAM_ImageBuilder.GetTypes(),
    ],
    [AWS_ResourceType.APPSTREAM_STACK, APPSTREAM_Stack.GetTypes()],
    [AWS_ResourceType.APPSTREAM_USER, APPSTREAM_User.GetTypes()],
    [
      AWS_ResourceType.APPSTREAM_USERSTACKASSOCIATION,
      APPSTREAM_UserStackAssociation.GetTypes(),
    ],
    [AWS_ResourceType.APPSYNC_APICACHE, APPSYNC_ApiCache.GetTypes()],
    [AWS_ResourceType.APPSYNC_APIKEY, APPSYNC_ApiKey.GetTypes()],
    [AWS_ResourceType.APPSYNC_DATASOURCE, APPSYNC_DataSource.GetTypes()],
    [AWS_ResourceType.APPSYNC_DOMAINNAME, APPSYNC_DomainName.GetTypes()],
    [
      AWS_ResourceType.APPSYNC_DOMAINNAMEAPIASSOCIATION,
      APPSYNC_DomainNameApiAssociation.GetTypes(),
    ],
    [AWS_ResourceType.APPSYNC_FUNCTION, APPSYNC_Function.GetTypes()],
    [AWS_ResourceType.APPSYNC_GRAPHQLAPI, APPSYNC_GraphQLApi.GetTypes()],
    [AWS_ResourceType.APPSYNC_RESOLVER, APPSYNC_Resolver.GetTypes()],
    [AWS_ResourceType.APPSYNC_TYPE, APPSYNC_Type.GetTypes()],
    [AWS_ResourceType.ATHENA_DATABASE, ATHENA_Database.GetTypes()],
    [AWS_ResourceType.ATHENA_DATACATALOG, ATHENA_DataCatalog.GetTypes()],
    [AWS_ResourceType.ATHENA_NAMEDQUERY, ATHENA_NamedQuery.GetTypes()],
    [
      AWS_ResourceType.ATHENA_PREPAREDSTATEMENT,
      ATHENA_PreparedStatement.GetTypes(),
    ],
    [AWS_ResourceType.ATHENA_WORKGROUP, ATHENA_Workgroup.GetTypes()],
    [
      AWS_ResourceType.AUDITMANAGER_ACCOUNTREGISTRATION,
      AUDITMANAGER_AccountRegistration.GetTypes(),
    ],
    [
      AWS_ResourceType.AUDITMANAGER_ASSESSMENT,
      AUDITMANAGER_Assessment.GetTypes(),
    ],
    [
      AWS_ResourceType.AUDITMANAGER_ASSESSMENTDELEGATION,
      AUDITMANAGER_AssessmentDelegation.GetTypes(),
    ],
    [
      AWS_ResourceType.AUDITMANAGER_ASSESSMENTREPORT,
      AUDITMANAGER_AssessmentReport.GetTypes(),
    ],
    [AWS_ResourceType.AUDITMANAGER_CONTROL, AUDITMANAGER_Control.GetTypes()],
    [
      AWS_ResourceType.AUDITMANAGER_FRAMEWORK,
      AUDITMANAGER_Framework.GetTypes(),
    ],
    [
      AWS_ResourceType.AUDITMANAGER_FRAMEWORKSHARE,
      AUDITMANAGER_FrameworkShare.GetTypes(),
    ],
    [
      AWS_ResourceType.AUDITMANAGER_ORGANIZATIONADMINACCOUNTREGISTRATION,
      AUDITMANAGER_OrganizationAdminAccountRegistration.GetTypes(),
    ],
    [
      AWS_ResourceType.AUTOSCALING_ATTACHMENT,
      AUTOSCALING_Attachment.GetTypes(),
    ],
    [AWS_ResourceType.AUTOSCALING_GROUP, AUTOSCALING_Group.GetTypes()],
    [
      AWS_ResourceType.AUTOSCALING_LIFECYCLEHOOK,
      AUTOSCALING_LifecycleHook.GetTypes(),
    ],
    [
      AWS_ResourceType.AUTOSCALING_NOTIFICATION,
      AUTOSCALING_Notification.GetTypes(),
    ],
    [AWS_ResourceType.AUTOSCALING_POLICY, AUTOSCALING_Policy.GetTypes()],
    [AWS_ResourceType.AUTOSCALING_SCHEDULE, AUTOSCALING_Schedule.GetTypes()],
    [AWS_ResourceType.AUTOSCALING_TAG, AUTOSCALING_Tag.GetTypes()],
    [
      AWS_ResourceType.AUTOSCALING_TRAFFICSOURCEATTACHMENT,
      AUTOSCALING_TrafficSourceAttachment.GetTypes(),
    ],
    [
      AWS_ResourceType.AUTOSCALINGPLANS_SCALINGPLAN,
      AUTOSCALINGPLANS_ScalingPlan.GetTypes(),
    ],
    [AWS_ResourceType.BACKUP_FRAMEWORK, BACKUP_Framework.GetTypes()],
    [AWS_ResourceType.BACKUP_GLOBALSETTINGS, BACKUP_GlobalSettings.GetTypes()],
    [AWS_ResourceType.BACKUP_PLAN, BACKUP_Plan.GetTypes()],
    [AWS_ResourceType.BACKUP_REGIONSETTINGS, BACKUP_RegionSettings.GetTypes()],
    [AWS_ResourceType.BACKUP_REPORTPLAN, BACKUP_ReportPlan.GetTypes()],
    [AWS_ResourceType.BACKUP_SELECTION, BACKUP_Selection.GetTypes()],
    [AWS_ResourceType.BACKUP_VAULT, BACKUP_Vault.GetTypes()],
    [
      AWS_ResourceType.BACKUP_VAULTLOCKCONFIGURATION,
      BACKUP_VaultLockConfiguration.GetTypes(),
    ],
    [
      AWS_ResourceType.BACKUP_VAULTNOTIFICATIONS,
      BACKUP_VaultNotifications.GetTypes(),
    ],
    [AWS_ResourceType.BACKUP_VAULTPOLICY, BACKUP_VaultPolicy.GetTypes()],
    [
      AWS_ResourceType.BATCH_COMPUTEENVIRONMENT,
      BATCH_ComputeEnvironment.GetTypes(),
    ],
    [AWS_ResourceType.BATCH_JOBDEFINITION, BATCH_JobDefinition.GetTypes()],
    [AWS_ResourceType.BATCH_JOBQUEUE, BATCH_JobQueue.GetTypes()],
    [
      AWS_ResourceType.BATCH_SCHEDULINGPOLICY,
      BATCH_SchedulingPolicy.GetTypes(),
    ],
    [AWS_ResourceType.BEDROCK_CUSTOMMODEL, BEDROCK_CustomModel.GetTypes()],
    [
      AWS_ResourceType.BEDROCK_PROVISIONEDMODELTHROUGHPUT,
      BEDROCK_ProvisionedModelThroughput.GetTypes(),
    ],
    [
      AWS_ResourceType.BEDROCKMODEL_INVOCATIONLOGGINGCONFIGURATION,
      BEDROCKMODEL_InvocationLoggingConfiguration.GetTypes(),
    ],
    [AWS_ResourceType.BUDGETS_BUDGET, BUDGETS_Budget.GetTypes()],
    [AWS_ResourceType.BUDGETS_BUDGETACTION, BUDGETS_BudgetAction.GetTypes()],
    [
      AWS_ResourceType.CFG_AGGREGATEAUTHORIZATION,
      CFG_AggregateAuthorization.GetTypes(),
    ],
    [
      AWS_ResourceType.CFG_CONFIGURATIONAGGREGATOR,
      CFG_ConfigurationAggregator.GetTypes(),
    ],
    [AWS_ResourceType.CFG_CONFORMANCEPACK, CFG_ConformancePack.GetTypes()],
    [AWS_ResourceType.CFG_DELIVERYCHANNEL, CFG_DeliveryChannel.GetTypes()],
    [
      AWS_ResourceType.CFG_ORGANIZATIONCONFORMANCEPACK,
      CFG_OrganizationConformancePack.GetTypes(),
    ],
    [
      AWS_ResourceType.CFG_ORGANIZATIONCUSTOMPOLICYRULE,
      CFG_OrganizationCustomPolicyRule.GetTypes(),
    ],
    [
      AWS_ResourceType.CFG_ORGANIZATIONCUSTOMRULE,
      CFG_OrganizationCustomRule.GetTypes(),
    ],
    [
      AWS_ResourceType.CFG_ORGANIZATIONMANAGEDRULE,
      CFG_OrganizationManagedRule.GetTypes(),
    ],
    [AWS_ResourceType.CFG_RECORDER, CFG_Recorder.GetTypes()],
    [AWS_ResourceType.CFG_RECORDERSTATUS, CFG_RecorderStatus.GetTypes()],
    [
      AWS_ResourceType.CFG_REMEDIATIONCONFIGURATION,
      CFG_RemediationConfiguration.GetTypes(),
    ],
    [
      AWS_ResourceType.CFG_RETENTIONCONFIGURATION,
      CFG_RetentionConfiguration.GetTypes(),
    ],
    [AWS_ResourceType.CFG_RULE, CFG_Rule.GetTypes()],
    [
      AWS_ResourceType.CHIME_SDKVOICEGLOBALSETTINGS,
      CHIME_SdkvoiceGlobalSettings.GetTypes(),
    ],
    [
      AWS_ResourceType.CHIME_SDKVOICESIPMEDIAAPPLICATION,
      CHIME_SdkvoiceSipMediaApplication.GetTypes(),
    ],
    [AWS_ResourceType.CHIME_SDKVOICESIPRULE, CHIME_SdkvoiceSipRule.GetTypes()],
    [
      AWS_ResourceType.CHIME_SDKVOICEVOICEPROFILEDOMAIN,
      CHIME_SdkvoiceVoiceProfileDomain.GetTypes(),
    ],
    [AWS_ResourceType.CHIME_VOICECONNECTOR, CHIME_VoiceConnector.GetTypes()],
    [
      AWS_ResourceType.CHIME_VOICECONNECTORGROUP,
      CHIME_VoiceConnectorGroup.GetTypes(),
    ],
    [
      AWS_ResourceType.CHIME_VOICECONNECTORLOGGING,
      CHIME_VoiceConnectorLogging.GetTypes(),
    ],
    [
      AWS_ResourceType.CHIME_VOICECONNECTORORGANIZATION,
      CHIME_VoiceConnectorOrganization.GetTypes(),
    ],
    [
      AWS_ResourceType.CHIME_VOICECONNECTORSTREAMING,
      CHIME_VoiceConnectorStreaming.GetTypes(),
    ],
    [
      AWS_ResourceType.CHIME_VOICECONNECTORTERMINATION,
      CHIME_VoiceConnectorTermination.GetTypes(),
    ],
    [
      AWS_ResourceType.CHIME_VOICECONNECTORTERMINATIONCREDENTIALS,
      CHIME_VoiceConnectorTerminationCredentials.GetTypes(),
    ],
    [
      AWS_ResourceType.CHIMESDKMEDIAPIPELINES_MEDIAINSIGHTSPIPELINECONFIGURATION,
      CHIMESDKMEDIAPIPELINES_MediaInsightsPipelineConfiguration.GetTypes(),
    ],
    [
      AWS_ResourceType.CLEANROOMS_COLLABORATION,
      CLEANROOMS_Collaboration.GetTypes(),
    ],
    [
      AWS_ResourceType.CLEANROOMS_CONFIGUREDTABLE,
      CLEANROOMS_ConfiguredTable.GetTypes(),
    ],
    [AWS_ResourceType.CLOUD9_ENVIRONMENTEC2, CLOUD9_EnvironmentEC2.GetTypes()],
    [
      AWS_ResourceType.CLOUD9_ENVIRONMENTMEMBERSHIP,
      CLOUD9_EnvironmentMembership.GetTypes(),
    ],
    [AWS_ResourceType.CLOUDCONTROL_RESOURCE, CLOUDCONTROL_Resource.GetTypes()],
    [
      AWS_ResourceType.CLOUDFORMATION_CLOUDFORMATIONTYPE,
      CLOUDFORMATION_CloudFormationType.GetTypes(),
    ],
    [AWS_ResourceType.CLOUDFORMATION_STACK, CLOUDFORMATION_Stack.GetTypes()],
    [
      AWS_ResourceType.CLOUDFORMATION_STACKSET,
      CLOUDFORMATION_StackSet.GetTypes(),
    ],
    [
      AWS_ResourceType.CLOUDFORMATION_STACKSETINSTANCE,
      CLOUDFORMATION_StackSetInstance.GetTypes(),
    ],
    [
      AWS_ResourceType.CLOUDFRONT_CACHEPOLICY,
      CLOUDFRONT_CachePolicy.GetTypes(),
    ],
    [
      AWS_ResourceType.CLOUDFRONT_CONTINUOUSDEPLOYMENTPOLICY,
      CLOUDFRONT_ContinuousDeploymentPolicy.GetTypes(),
    ],
    [
      AWS_ResourceType.CLOUDFRONT_DISTRIBUTION,
      CLOUDFRONT_Distribution.GetTypes(),
    ],
    [
      AWS_ResourceType.CLOUDFRONT_FIELDLEVELENCRYPTIONCONFIG,
      CLOUDFRONT_FieldLevelEncryptionConfig.GetTypes(),
    ],
    [
      AWS_ResourceType.CLOUDFRONT_FIELDLEVELENCRYPTIONPROFILE,
      CLOUDFRONT_FieldLevelEncryptionProfile.GetTypes(),
    ],
    [AWS_ResourceType.CLOUDFRONT_FUNCTION, CLOUDFRONT_Function.GetTypes()],
    [AWS_ResourceType.CLOUDFRONT_KEYGROUP, CLOUDFRONT_KeyGroup.GetTypes()],
    [
      AWS_ResourceType.CLOUDFRONT_KEYVALUESTORE,
      CLOUDFRONT_KeyValueStore.GetTypes(),
    ],
    [
      AWS_ResourceType.CLOUDFRONT_MONITORINGSUBSCRIPTION,
      CLOUDFRONT_MonitoringSubscription.GetTypes(),
    ],
    [
      AWS_ResourceType.CLOUDFRONT_ORIGINACCESSCONTROL,
      CLOUDFRONT_OriginAccessControl.GetTypes(),
    ],
    [
      AWS_ResourceType.CLOUDFRONT_ORIGINACCESSIDENTITY,
      CLOUDFRONT_OriginAccessIdentity.GetTypes(),
    ],
    [
      AWS_ResourceType.CLOUDFRONT_ORIGINREQUESTPOLICY,
      CLOUDFRONT_OriginRequestPolicy.GetTypes(),
    ],
    [AWS_ResourceType.CLOUDFRONT_PUBLICKEY, CLOUDFRONT_PublicKey.GetTypes()],
    [
      AWS_ResourceType.CLOUDFRONT_REALTIMELOGCONFIG,
      CLOUDFRONT_RealtimeLogConfig.GetTypes(),
    ],
    [
      AWS_ResourceType.CLOUDFRONT_RESPONSEHEADERSPOLICY,
      CLOUDFRONT_ResponseHeadersPolicy.GetTypes(),
    ],
    [AWS_ResourceType.CLOUDHSMV2_CLUSTER, CLOUDHSMV2_Cluster.GetTypes()],
    [AWS_ResourceType.CLOUDHSMV2_HSM, CLOUDHSMV2_Hsm.GetTypes()],
    [AWS_ResourceType.CLOUDSEARCH_DOMAIN, CLOUDSEARCH_Domain.GetTypes()],
    [
      AWS_ResourceType.CLOUDSEARCH_DOMAINSERVICEACCESSPOLICY,
      CLOUDSEARCH_DomainServiceAccessPolicy.GetTypes(),
    ],
    [
      AWS_ResourceType.CLOUDTRAIL_EVENTDATASTORE,
      CLOUDTRAIL_EventDataStore.GetTypes(),
    ],
    [AWS_ResourceType.CLOUDTRAIL_TRAIL, CLOUDTRAIL_Trail.GetTypes()],
    [
      AWS_ResourceType.CLOUDWATCH_COMPOSITEALARM,
      CLOUDWATCH_CompositeAlarm.GetTypes(),
    ],
    [AWS_ResourceType.CLOUDWATCH_DASHBOARD, CLOUDWATCH_Dashboard.GetTypes()],
    [
      AWS_ResourceType.CLOUDWATCH_EVENTAPIDESTINATION,
      CLOUDWATCH_EventApiDestination.GetTypes(),
    ],
    [
      AWS_ResourceType.CLOUDWATCH_EVENTARCHIVE,
      CLOUDWATCH_EventArchive.GetTypes(),
    ],
    [AWS_ResourceType.CLOUDWATCH_EVENTBUS, CLOUDWATCH_EventBus.GetTypes()],
    [
      AWS_ResourceType.CLOUDWATCH_EVENTBUSPOLICY,
      CLOUDWATCH_EventBusPolicy.GetTypes(),
    ],
    [
      AWS_ResourceType.CLOUDWATCH_EVENTCONNECTION,
      CLOUDWATCH_EventConnection.GetTypes(),
    ],
    [
      AWS_ResourceType.CLOUDWATCH_EVENTENDPOINT,
      CLOUDWATCH_EventEndpoint.GetTypes(),
    ],
    [
      AWS_ResourceType.CLOUDWATCH_EVENTPERMISSION,
      CLOUDWATCH_EventPermission.GetTypes(),
    ],
    [AWS_ResourceType.CLOUDWATCH_EVENTRULE, CLOUDWATCH_EventRule.GetTypes()],
    [
      AWS_ResourceType.CLOUDWATCH_EVENTTARGET,
      CLOUDWATCH_EventTarget.GetTypes(),
    ],
    [
      AWS_ResourceType.CLOUDWATCH_INTERNETMONITOR,
      CLOUDWATCH_InternetMonitor.GetTypes(),
    ],
    [
      AWS_ResourceType.CLOUDWATCH_LOGDATAPROTECTIONPOLICY,
      CLOUDWATCH_LogDataProtectionPolicy.GetTypes(),
    ],
    [
      AWS_ResourceType.CLOUDWATCH_LOGDESTINATION,
      CLOUDWATCH_LogDestination.GetTypes(),
    ],
    [
      AWS_ResourceType.CLOUDWATCH_LOGDESTINATIONPOLICY,
      CLOUDWATCH_LogDestinationPolicy.GetTypes(),
    ],
    [AWS_ResourceType.CLOUDWATCH_LOGGROUP, CLOUDWATCH_LogGroup.GetTypes()],
    [
      AWS_ResourceType.CLOUDWATCH_LOGMETRICFILTER,
      CLOUDWATCH_LogMetricFilter.GetTypes(),
    ],
    [
      AWS_ResourceType.CLOUDWATCH_LOGRESOURCEPOLICY,
      CLOUDWATCH_LogResourcePolicy.GetTypes(),
    ],
    [AWS_ResourceType.CLOUDWATCH_LOGSTREAM, CLOUDWATCH_LogStream.GetTypes()],
    [
      AWS_ResourceType.CLOUDWATCH_LOGSUBSCRIPTIONFILTER,
      CLOUDWATCH_LogSubscriptionFilter.GetTypes(),
    ],
    [
      AWS_ResourceType.CLOUDWATCH_METRICALARM,
      CLOUDWATCH_MetricAlarm.GetTypes(),
    ],
    [
      AWS_ResourceType.CLOUDWATCH_METRICSTREAM,
      CLOUDWATCH_MetricStream.GetTypes(),
    ],
    [
      AWS_ResourceType.CLOUDWATCH_QUERYDEFINITION,
      CLOUDWATCH_QueryDefinition.GetTypes(),
    ],
    [AWS_ResourceType.CODEARTIFACT_DOMAIN, CODEARTIFACT_Domain.GetTypes()],
    [
      AWS_ResourceType.CODEARTIFACT_DOMAINPERMISSIONS,
      CODEARTIFACT_DomainPermissions.GetTypes(),
    ],
    [
      AWS_ResourceType.CODEARTIFACT_REPOSITORY,
      CODEARTIFACT_Repository.GetTypes(),
    ],
    [
      AWS_ResourceType.CODEARTIFACT_REPOSITORYPERMISSIONSPOLICY,
      CODEARTIFACT_RepositoryPermissionsPolicy.GetTypes(),
    ],
    [AWS_ResourceType.CODEBUILD_PROJECT, CODEBUILD_Project.GetTypes()],
    [AWS_ResourceType.CODEBUILD_REPORTGROUP, CODEBUILD_ReportGroup.GetTypes()],
    [
      AWS_ResourceType.CODEBUILD_RESOURCEPOLICY,
      CODEBUILD_ResourcePolicy.GetTypes(),
    ],
    [
      AWS_ResourceType.CODEBUILD_SOURCECREDENTIAL,
      CODEBUILD_SourceCredential.GetTypes(),
    ],
    [AWS_ResourceType.CODEBUILD_WEBHOOK, CODEBUILD_Webhook.GetTypes()],
    [
      AWS_ResourceType.CODECATALYST_DEVENVIRONMENT,
      CODECATALYST_DevEnvironment.GetTypes(),
    ],
    [AWS_ResourceType.CODECATALYST_PROJECT, CODECATALYST_Project.GetTypes()],
    [
      AWS_ResourceType.CODECATALYST_SOURCEREPOSITORY,
      CODECATALYST_SourceRepository.GetTypes(),
    ],
    [
      AWS_ResourceType.CODECOMMIT_APPROVALRULETEMPLATE,
      CODECOMMIT_ApprovalRuleTemplate.GetTypes(),
    ],
    [
      AWS_ResourceType.CODECOMMIT_APPROVALRULETEMPLATEASSOCIATION,
      CODECOMMIT_ApprovalRuleTemplateAssociation.GetTypes(),
    ],
    [AWS_ResourceType.CODECOMMIT_REPOSITORY, CODECOMMIT_Repository.GetTypes()],
    [AWS_ResourceType.CODECOMMIT_TRIGGER, CODECOMMIT_Trigger.GetTypes()],
    [
      AWS_ResourceType.CODEDEPLOY_APPLICATION,
      CODEDEPLOY_Application.GetTypes(),
    ],
    [
      AWS_ResourceType.CODEDEPLOY_DEPLOYMENTCONFIG,
      CODEDEPLOY_DeploymentConfig.GetTypes(),
    ],
    [
      AWS_ResourceType.CODEDEPLOY_DEPLOYMENTGROUP,
      CODEDEPLOY_DeploymentGroup.GetTypes(),
    ],
    [
      AWS_ResourceType.CODEGURUPROFILER_PROFILINGGROUP,
      CODEGURUPROFILER_ProfilingGroup.GetTypes(),
    ],
    [
      AWS_ResourceType.CODEGURUREVIEWER_REPOSITORYASSOCIATION,
      CODEGURUREVIEWER_RepositoryAssociation.GetTypes(),
    ],
    [
      AWS_ResourceType.CODEPIPELINE_CUSTOMACTIONTYPE,
      CODEPIPELINE_CustomActionType.GetTypes(),
    ],
    [AWS_ResourceType.CODEPIPELINE_PIPELINE, CODEPIPELINE_Pipeline.GetTypes()],
    [AWS_ResourceType.CODEPIPELINE_WEBHOOK, CODEPIPELINE_Webhook.GetTypes()],
    [
      AWS_ResourceType.CODESTARCONNECTIONS_CONNECTION,
      CODESTARCONNECTIONS_Connection.GetTypes(),
    ],
    [
      AWS_ResourceType.CODESTARCONNECTIONS_HOST,
      CODESTARCONNECTIONS_Host.GetTypes(),
    ],
    [
      AWS_ResourceType.CODESTARNOTIFICATIONS_NOTIFICATIONRULE,
      CODESTARNOTIFICATIONS_NotificationRule.GetTypes(),
    ],
    [AWS_ResourceType.COGNITO_IDENTITYPOOL, COGNITO_IdentityPool.GetTypes()],
    [
      AWS_ResourceType.COGNITO_IDENTITYPOOLPROVIDERPRINCIPALTAG,
      COGNITO_IdentityPoolProviderPrincipalTag.GetTypes(),
    ],
    [
      AWS_ResourceType.COGNITO_IDENTITYPOOLROLEATTACHMENT,
      COGNITO_IdentityPoolRoleAttachment.GetTypes(),
    ],
    [
      AWS_ResourceType.COGNITO_IDENTITYPROVIDER,
      COGNITO_IdentityProvider.GetTypes(),
    ],
    [
      AWS_ResourceType.COGNITO_MANAGEDUSERPOOLCLIENT,
      COGNITO_ManagedUserPoolClient.GetTypes(),
    ],
    [
      AWS_ResourceType.COGNITO_RESOURCESERVER,
      COGNITO_ResourceServer.GetTypes(),
    ],
    [
      AWS_ResourceType.COGNITO_RISKCONFIGURATION,
      COGNITO_RiskConfiguration.GetTypes(),
    ],
    [AWS_ResourceType.COGNITO_USER, COGNITO_User.GetTypes()],
    [AWS_ResourceType.COGNITO_USERGROUP, COGNITO_UserGroup.GetTypes()],
    [AWS_ResourceType.COGNITO_USERINGROUP, COGNITO_UserInGroup.GetTypes()],
    [AWS_ResourceType.COGNITO_USERPOOL, COGNITO_UserPool.GetTypes()],
    [
      AWS_ResourceType.COGNITO_USERPOOLCLIENT,
      COGNITO_UserPoolClient.GetTypes(),
    ],
    [
      AWS_ResourceType.COGNITO_USERPOOLDOMAIN,
      COGNITO_UserPoolDomain.GetTypes(),
    ],
    [
      AWS_ResourceType.COGNITO_USERPOOLUICUSTOMIZATION,
      COGNITO_UserPoolUICustomization.GetTypes(),
    ],
    [
      AWS_ResourceType.COMPREHEND_DOCUMENTCLASSIFIER,
      COMPREHEND_DocumentClassifier.GetTypes(),
    ],
    [
      AWS_ResourceType.COMPREHEND_ENTITYRECOGNIZER,
      COMPREHEND_EntityRecognizer.GetTypes(),
    ],
    [
      AWS_ResourceType.CONNECT_BOTASSOCIATION,
      CONNECT_BotAssociation.GetTypes(),
    ],
    [AWS_ResourceType.CONNECT_CONTACTFLOW, CONNECT_ContactFlow.GetTypes()],
    [
      AWS_ResourceType.CONNECT_CONTACTFLOWMODULE,
      CONNECT_ContactFlowModule.GetTypes(),
    ],
    [
      AWS_ResourceType.CONNECT_HOURSOFOPERATION,
      CONNECT_HoursOfOperation.GetTypes(),
    ],
    [AWS_ResourceType.CONNECT_INSTANCE, CONNECT_Instance.GetTypes()],
    [
      AWS_ResourceType.CONNECT_INSTANCESTORAGECONFIG,
      CONNECT_InstanceStorageConfig.GetTypes(),
    ],
    [
      AWS_ResourceType.CONNECT_LAMBDAFUNCTIONASSOCIATION,
      CONNECT_LambdaFunctionAssociation.GetTypes(),
    ],
    [AWS_ResourceType.CONNECT_PHONENUMBER, CONNECT_PhoneNumber.GetTypes()],
    [AWS_ResourceType.CONNECT_QUEUE, CONNECT_Queue.GetTypes()],
    [AWS_ResourceType.CONNECT_QUICKCONNECT, CONNECT_QuickConnect.GetTypes()],
    [
      AWS_ResourceType.CONNECT_ROUTINGPROFILE,
      CONNECT_RoutingProfile.GetTypes(),
    ],
    [
      AWS_ResourceType.CONNECT_SECURITYPROFILE,
      CONNECT_SecurityProfile.GetTypes(),
    ],
    [AWS_ResourceType.CONNECT_USER, CONNECT_User.GetTypes()],
    [
      AWS_ResourceType.CONNECT_USERHIERARCHYGROUP,
      CONNECT_UserHierarchyGroup.GetTypes(),
    ],
    [
      AWS_ResourceType.CONNECT_USERHIERARCHYSTRUCTURE,
      CONNECT_UserHierarchyStructure.GetTypes(),
    ],
    [AWS_ResourceType.CONNECT_VOCABULARY, CONNECT_Vocabulary.GetTypes()],
    [
      AWS_ResourceType.CONTROLTOWER_CONTROLTOWERCONTROL,
      CONTROLTOWER_ControlTowerControl.GetTypes(),
    ],
    [
      AWS_ResourceType.CONTROLTOWER_LANDINGZONE,
      CONTROLTOWER_LandingZone.GetTypes(),
    ],
    [
      AWS_ResourceType.COSTEXPLORER_ANOMALYMONITOR,
      COSTEXPLORER_AnomalyMonitor.GetTypes(),
    ],
    [
      AWS_ResourceType.COSTEXPLORER_ANOMALYSUBSCRIPTION,
      COSTEXPLORER_AnomalySubscription.GetTypes(),
    ],
    [
      AWS_ResourceType.COSTEXPLORER_COSTALLOCATIONTAG,
      COSTEXPLORER_CostAllocationTag.GetTypes(),
    ],
    [
      AWS_ResourceType.COSTEXPLORER_COSTCATEGORY,
      COSTEXPLORER_CostCategory.GetTypes(),
    ],
    [AWS_ResourceType.CUR_REPORTDEFINITION, CUR_ReportDefinition.GetTypes()],
    [
      AWS_ResourceType.CUSTOMERPROFILES_DOMAIN,
      CUSTOMERPROFILES_Domain.GetTypes(),
    ],
    [
      AWS_ResourceType.CUSTOMERPROFILES_PROFILE,
      CUSTOMERPROFILES_Profile.GetTypes(),
    ],
    [AWS_ResourceType.DATAEXCHANGE_DATASET, DATAEXCHANGE_DataSet.GetTypes()],
    [AWS_ResourceType.DATAEXCHANGE_REVISION, DATAEXCHANGE_Revision.GetTypes()],
    [AWS_ResourceType.DATAPIPELINE_PIPELINE, DATAPIPELINE_Pipeline.GetTypes()],
    [
      AWS_ResourceType.DATAPIPELINE_PIPELINEDEFINITION,
      DATAPIPELINE_PipelineDefinition.GetTypes(),
    ],
    [AWS_ResourceType.DATASYNC_AGENT, DATASYNC_Agent.GetTypes()],
    [AWS_ResourceType.DATASYNC_EFSLOCATION, DATASYNC_EfsLocation.GetTypes()],
    [
      AWS_ResourceType.DATASYNC_FSXOPENZFSFILESYSTEM,
      DATASYNC_FsxOpenZfsFileSystem.GetTypes(),
    ],
    [
      AWS_ResourceType.DATASYNC_LOCATIONAZUREBLOB,
      DATASYNC_LocationAzureBlob.GetTypes(),
    ],
    [
      AWS_ResourceType.DATASYNC_LOCATIONFSXLUSTRE,
      DATASYNC_LocationFsxLustre.GetTypes(),
    ],
    [
      AWS_ResourceType.DATASYNC_LOCATIONFSXONTAPFILESYSTEM,
      DATASYNC_LocationFsxOntapFileSystem.GetTypes(),
    ],
    [
      AWS_ResourceType.DATASYNC_LOCATIONFSXWINDOWS,
      DATASYNC_LocationFsxWindows.GetTypes(),
    ],
    [AWS_ResourceType.DATASYNC_LOCATIONHDFS, DATASYNC_LocationHdfs.GetTypes()],
    [
      AWS_ResourceType.DATASYNC_LOCATIONOBJECTSTORAGE,
      DATASYNC_LocationObjectStorage.GetTypes(),
    ],
    [AWS_ResourceType.DATASYNC_LOCATIONSMB, DATASYNC_LocationSmb.GetTypes()],
    [AWS_ResourceType.DATASYNC_NFSLOCATION, DATASYNC_NfsLocation.GetTypes()],
    [AWS_ResourceType.DATASYNC_S3LOCATION, DATASYNC_S3Location.GetTypes()],
    [AWS_ResourceType.DATASYNC_TASK, DATASYNC_Task.GetTypes()],
    [AWS_ResourceType.DAX_CLUSTER, DAX_Cluster.GetTypes()],
    [AWS_ResourceType.DAX_PARAMETERGROUP, DAX_ParameterGroup.GetTypes()],
    [AWS_ResourceType.DAX_SUBNETGROUP, DAX_SubnetGroup.GetTypes()],
    [AWS_ResourceType.DETECTIVE_GRAPH, DETECTIVE_Graph.GetTypes()],
    [
      AWS_ResourceType.DETECTIVE_INVITATIONACCEPTER,
      DETECTIVE_InvitationAccepter.GetTypes(),
    ],
    [AWS_ResourceType.DETECTIVE_MEMBER, DETECTIVE_Member.GetTypes()],
    [
      AWS_ResourceType.DETECTIVE_ORGANIZATIONADMINACCOUNT,
      DETECTIVE_OrganizationAdminAccount.GetTypes(),
    ],
    [
      AWS_ResourceType.DETECTIVE_ORGANIZATIONCONFIGURATION,
      DETECTIVE_OrganizationConfiguration.GetTypes(),
    ],
    [AWS_ResourceType.DEVICEFARM_DEVICEPOOL, DEVICEFARM_DevicePool.GetTypes()],
    [
      AWS_ResourceType.DEVICEFARM_INSTANCEPROFILE,
      DEVICEFARM_InstanceProfile.GetTypes(),
    ],
    [
      AWS_ResourceType.DEVICEFARM_NETWORKPROFILE,
      DEVICEFARM_NetworkProfile.GetTypes(),
    ],
    [AWS_ResourceType.DEVICEFARM_PROJECT, DEVICEFARM_Project.GetTypes()],
    [
      AWS_ResourceType.DEVICEFARM_TESTGRIDPROJECT,
      DEVICEFARM_TestGridProject.GetTypes(),
    ],
    [AWS_ResourceType.DEVICEFARM_UPLOAD, DEVICEFARM_Upload.GetTypes()],
    [AWS_ResourceType.DIRECTCONNECT_BGPPEER, DIRECTCONNECT_BgpPeer.GetTypes()],
    [
      AWS_ResourceType.DIRECTCONNECT_CONNECTION,
      DIRECTCONNECT_Connection.GetTypes(),
    ],
    [
      AWS_ResourceType.DIRECTCONNECT_CONNECTIONASSOCIATION,
      DIRECTCONNECT_ConnectionAssociation.GetTypes(),
    ],
    [
      AWS_ResourceType.DIRECTCONNECT_CONNECTIONCONFIRMATION,
      DIRECTCONNECT_ConnectionConfirmation.GetTypes(),
    ],
    [AWS_ResourceType.DIRECTCONNECT_GATEWAY, DIRECTCONNECT_Gateway.GetTypes()],
    [
      AWS_ResourceType.DIRECTCONNECT_GATEWAYASSOCIATION,
      DIRECTCONNECT_GatewayAssociation.GetTypes(),
    ],
    [
      AWS_ResourceType.DIRECTCONNECT_GATEWAYASSOCIATIONPROPOSAL,
      DIRECTCONNECT_GatewayAssociationProposal.GetTypes(),
    ],
    [
      AWS_ResourceType.DIRECTCONNECT_HOSTEDCONNECTION,
      DIRECTCONNECT_HostedConnection.GetTypes(),
    ],
    [
      AWS_ResourceType.DIRECTCONNECT_HOSTEDPRIVATEVIRTUALINTERFACE,
      DIRECTCONNECT_HostedPrivateVirtualInterface.GetTypes(),
    ],
    [
      AWS_ResourceType.DIRECTCONNECT_HOSTEDPRIVATEVIRTUALINTERFACEACCEPTER,
      DIRECTCONNECT_HostedPrivateVirtualInterfaceAccepter.GetTypes(),
    ],
    [
      AWS_ResourceType.DIRECTCONNECT_HOSTEDPUBLICVIRTUALINTERFACE,
      DIRECTCONNECT_HostedPublicVirtualInterface.GetTypes(),
    ],
    [
      AWS_ResourceType.DIRECTCONNECT_HOSTEDPUBLICVIRTUALINTERFACEACCEPTER,
      DIRECTCONNECT_HostedPublicVirtualInterfaceAccepter.GetTypes(),
    ],
    [
      AWS_ResourceType.DIRECTCONNECT_HOSTEDTRANSITVIRTUALINTERFACE,
      DIRECTCONNECT_HostedTransitVirtualInterface.GetTypes(),
    ],
    [
      AWS_ResourceType.DIRECTCONNECT_HOSTEDTRANSITVIRTUALINTERFACEACCEPTOR,
      DIRECTCONNECT_HostedTransitVirtualInterfaceAcceptor.GetTypes(),
    ],
    [
      AWS_ResourceType.DIRECTCONNECT_LINKAGGREGATIONGROUP,
      DIRECTCONNECT_LinkAggregationGroup.GetTypes(),
    ],
    [
      AWS_ResourceType.DIRECTCONNECT_MACSECKEYASSOCIATION,
      DIRECTCONNECT_MacsecKeyAssociation.GetTypes(),
    ],
    [
      AWS_ResourceType.DIRECTCONNECT_PRIVATEVIRTUALINTERFACE,
      DIRECTCONNECT_PrivateVirtualInterface.GetTypes(),
    ],
    [
      AWS_ResourceType.DIRECTCONNECT_PUBLICVIRTUALINTERFACE,
      DIRECTCONNECT_PublicVirtualInterface.GetTypes(),
    ],
    [
      AWS_ResourceType.DIRECTCONNECT_TRANSITVIRTUALINTERFACE,
      DIRECTCONNECT_TransitVirtualInterface.GetTypes(),
    ],
    [
      AWS_ResourceType.DIRECTORYSERVICE_CONDITIONALFORWADER,
      DIRECTORYSERVICE_ConditionalForwader.GetTypes(),
    ],
    [
      AWS_ResourceType.DIRECTORYSERVICE_DIRECTORY,
      DIRECTORYSERVICE_Directory.GetTypes(),
    ],
    [
      AWS_ResourceType.DIRECTORYSERVICE_LOGSERVICE,
      DIRECTORYSERVICE_LogService.GetTypes(),
    ],
    [
      AWS_ResourceType.DIRECTORYSERVICE_RADIUSSETTINGS,
      DIRECTORYSERVICE_RadiusSettings.GetTypes(),
    ],
    [
      AWS_ResourceType.DIRECTORYSERVICE_SERVICEREGION,
      DIRECTORYSERVICE_ServiceRegion.GetTypes(),
    ],
    [
      AWS_ResourceType.DIRECTORYSERVICE_SHAREDDIRECTORY,
      DIRECTORYSERVICE_SharedDirectory.GetTypes(),
    ],
    [
      AWS_ResourceType.DIRECTORYSERVICE_SHAREDDIRECTORYACCEPTER,
      DIRECTORYSERVICE_SharedDirectoryAccepter.GetTypes(),
    ],
    [
      AWS_ResourceType.DIRECTORYSERVICE_TRUST,
      DIRECTORYSERVICE_Trust.GetTypes(),
    ],
    [AWS_ResourceType.DLM_LIFECYCLEPOLICY, DLM_LifecyclePolicy.GetTypes()],
    [AWS_ResourceType.DMS_CERTIFICATE, DMS_Certificate.GetTypes()],
    [AWS_ResourceType.DMS_ENDPOINT, DMS_Endpoint.GetTypes()],
    [AWS_ResourceType.DMS_EVENTSUBSCRIPTION, DMS_EventSubscription.GetTypes()],
    [AWS_ResourceType.DMS_REPLICATIONCONFIG, DMS_ReplicationConfig.GetTypes()],
    [
      AWS_ResourceType.DMS_REPLICATIONINSTANCE,
      DMS_ReplicationInstance.GetTypes(),
    ],
    [
      AWS_ResourceType.DMS_REPLICATIONSUBNETGROUP,
      DMS_ReplicationSubnetGroup.GetTypes(),
    ],
    [AWS_ResourceType.DMS_REPLICATIONTASK, DMS_ReplicationTask.GetTypes()],
    [AWS_ResourceType.DMS_S3ENDPOINT, DMS_S3Endpoint.GetTypes()],
    [AWS_ResourceType.DOCDB_CLUSTER, DOCDB_Cluster.GetTypes()],
    [AWS_ResourceType.DOCDB_CLUSTERINSTANCE, DOCDB_ClusterInstance.GetTypes()],
    [
      AWS_ResourceType.DOCDB_CLUSTERPARAMETERGROUP,
      DOCDB_ClusterParameterGroup.GetTypes(),
    ],
    [AWS_ResourceType.DOCDB_CLUSTERSNAPSHOT, DOCDB_ClusterSnapshot.GetTypes()],
    [AWS_ResourceType.DOCDB_ELASTICCLUSTER, DOCDB_ElasticCluster.GetTypes()],
    [
      AWS_ResourceType.DOCDB_EVENTSUBSCRIPTION,
      DOCDB_EventSubscription.GetTypes(),
    ],
    [AWS_ResourceType.DOCDB_GLOBALCLUSTER, DOCDB_GlobalCluster.GetTypes()],
    [AWS_ResourceType.DOCDB_SUBNETGROUP, DOCDB_SubnetGroup.GetTypes()],
    [
      AWS_ResourceType.DYNAMODB_CONTRIBUTORINSIGHTS,
      DYNAMODB_ContributorInsights.GetTypes(),
    ],
    [AWS_ResourceType.DYNAMODB_GLOBALTABLE, DYNAMODB_GlobalTable.GetTypes()],
    [
      AWS_ResourceType.DYNAMODB_KINESISSTREAMINGDESTINATION,
      DYNAMODB_KinesisStreamingDestination.GetTypes(),
    ],
    [AWS_ResourceType.DYNAMODB_TABLE, DYNAMODB_Table.GetTypes()],
    [AWS_ResourceType.DYNAMODB_TABLEITEM, DYNAMODB_TableItem.GetTypes()],
    [AWS_ResourceType.DYNAMODB_TABLEREPLICA, DYNAMODB_TableReplica.GetTypes()],
    [AWS_ResourceType.DYNAMODB_TAG, DYNAMODB_Tag.GetTypes()],
    [AWS_ResourceType.EBS_DEFAULTKMSKEY, EBS_DefaultKmsKey.GetTypes()],
    [
      AWS_ResourceType.EBS_ENCRYPTIONBYDEFAULT,
      EBS_EncryptionByDefault.GetTypes(),
    ],
    [
      AWS_ResourceType.EBS_FASTSNAPSHOTRESTORE,
      EBS_FastSnapshotRestore.GetTypes(),
    ],
    [AWS_ResourceType.EBS_SNAPSHOT, EBS_Snapshot.GetTypes()],
    [AWS_ResourceType.EBS_SNAPSHOTCOPY, EBS_SnapshotCopy.GetTypes()],
    [AWS_ResourceType.EBS_SNAPSHOTIMPORT, EBS_SnapshotImport.GetTypes()],
    [AWS_ResourceType.EBS_VOLUME, EBS_Volume.GetTypes()],
    [AWS_ResourceType.EC2_AMI, EC2_Ami.GetTypes()],
    [AWS_ResourceType.EC2_AMICOPY, EC2_AmiCopy.GetTypes()],
    [AWS_ResourceType.EC2_AMIFROMINSTANCE, EC2_AmiFromInstance.GetTypes()],
    [
      AWS_ResourceType.EC2_AMILAUNCHPERMISSION,
      EC2_AmiLaunchPermission.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2_AVAILABILITYZONEGROUP,
      EC2_AvailabilityZoneGroup.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2_CAPACITYRESERVATION,
      EC2_CapacityReservation.GetTypes(),
    ],
    [AWS_ResourceType.EC2_CARRIERGATEWAY, EC2_CarrierGateway.GetTypes()],
    [AWS_ResourceType.EC2_CUSTOMERGATEWAY, EC2_CustomerGateway.GetTypes()],
    [AWS_ResourceType.EC2_DEDICATEDHOST, EC2_DedicatedHost.GetTypes()],
    [AWS_ResourceType.EC2_DEFAULTNETWORKACL, EC2_DefaultNetworkAcl.GetTypes()],
    [AWS_ResourceType.EC2_DEFAULTROUTETABLE, EC2_DefaultRouteTable.GetTypes()],
    [
      AWS_ResourceType.EC2_DEFAULTSECURITYGROUP,
      EC2_DefaultSecurityGroup.GetTypes(),
    ],
    [AWS_ResourceType.EC2_DEFAULTSUBNET, EC2_DefaultSubnet.GetTypes()],
    [AWS_ResourceType.EC2_DEFAULTVPC, EC2_DefaultVpc.GetTypes()],
    [
      AWS_ResourceType.EC2_DEFAULTVPCDHCPOPTIONS,
      EC2_DefaultVpcDhcpOptions.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2_EGRESSONLYINTERNETGATEWAY,
      EC2_EgressOnlyInternetGateway.GetTypes(),
    ],
    [AWS_ResourceType.EC2_EIP, EC2_Eip.GetTypes()],
    [AWS_ResourceType.EC2_EIPASSOCIATION, EC2_EipAssociation.GetTypes()],
    [AWS_ResourceType.EC2_FLEET, EC2_Fleet.GetTypes()],
    [AWS_ResourceType.EC2_FLOWLOG, EC2_FlowLog.GetTypes()],
    [
      AWS_ResourceType.EC2_IMAGEBLOCKPUBLICACCESS,
      EC2_ImageBlockPublicAccess.GetTypes(),
    ],
    [AWS_ResourceType.EC2_INSTANCE, EC2_Instance.GetTypes()],
    [AWS_ResourceType.EC2_INTERNETGATEWAY, EC2_InternetGateway.GetTypes()],
    [
      AWS_ResourceType.EC2_INTERNETGATEWAYATTACHMENT,
      EC2_InternetGatewayAttachment.GetTypes(),
    ],
    [AWS_ResourceType.EC2_KEYPAIR, EC2_KeyPair.GetTypes()],
    [
      AWS_ResourceType.EC2_LAUNCHCONFIGURATION,
      EC2_LaunchConfiguration.GetTypes(),
    ],
    [AWS_ResourceType.EC2_LAUNCHTEMPLATE, EC2_LaunchTemplate.GetTypes()],
    [AWS_ResourceType.EC2_LOCALGATEWAYROUTE, EC2_LocalGatewayRoute.GetTypes()],
    [
      AWS_ResourceType.EC2_LOCALGATEWAYROUTETABLEVPCASSOCIATION,
      EC2_LocalGatewayRouteTableVpcAssociation.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2_MAINROUTETABLEASSOCIATION,
      EC2_MainRouteTableAssociation.GetTypes(),
    ],
    [AWS_ResourceType.EC2_MANAGEDPREFIXLIST, EC2_ManagedPrefixList.GetTypes()],
    [
      AWS_ResourceType.EC2_MANAGEDPREFIXLISTENTRY,
      EC2_ManagedPrefixListEntry.GetTypes(),
    ],
    [AWS_ResourceType.EC2_NATGATEWAY, EC2_NatGateway.GetTypes()],
    [AWS_ResourceType.EC2_NETWORKACL, EC2_NetworkAcl.GetTypes()],
    [
      AWS_ResourceType.EC2_NETWORKACLASSOCIATION,
      EC2_NetworkAclAssociation.GetTypes(),
    ],
    [AWS_ResourceType.EC2_NETWORKACLRULE, EC2_NetworkAclRule.GetTypes()],
    [
      AWS_ResourceType.EC2_NETWORKINSIGHTSANALYSIS,
      EC2_NetworkInsightsAnalysis.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2_NETWORKINSIGHTSPATH,
      EC2_NetworkInsightsPath.GetTypes(),
    ],
    [AWS_ResourceType.EC2_NETWORKINTERFACE, EC2_NetworkInterface.GetTypes()],
    [
      AWS_ResourceType.EC2_NETWORKINTERFACEATTACHMENT,
      EC2_NetworkInterfaceAttachment.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2_NETWORKINTERFACESECURITYGROUPATTACHMENT,
      EC2_NetworkInterfaceSecurityGroupAttachment.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2_PEERINGCONNECTIONOPTIONS,
      EC2_PeeringConnectionOptions.GetTypes(),
    ],
    [AWS_ResourceType.EC2_PLACEMENTGROUP, EC2_PlacementGroup.GetTypes()],
    [
      AWS_ResourceType.EC2_PROXYPROTOCOLPOLICY,
      EC2_ProxyProtocolPolicy.GetTypes(),
    ],
    [AWS_ResourceType.EC2_ROUTE, EC2_Route.GetTypes()],
    [AWS_ResourceType.EC2_ROUTETABLE, EC2_RouteTable.GetTypes()],
    [
      AWS_ResourceType.EC2_ROUTETABLEASSOCIATION,
      EC2_RouteTableAssociation.GetTypes(),
    ],
    [AWS_ResourceType.EC2_SECURITYGROUP, EC2_SecurityGroup.GetTypes()],
    [
      AWS_ResourceType.EC2_SECURITYGROUPASSOCIATION,
      EC2_SecurityGroupAssociation.GetTypes(),
    ],
    [AWS_ResourceType.EC2_SECURITYGROUPRULE, EC2_SecurityGroupRule.GetTypes()],
    [
      AWS_ResourceType.EC2_SERIALCONSOLEACCESS,
      EC2_SerialConsoleAccess.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2_SNAPSHOTCREATEVOLUMEPERMISSION,
      EC2_SnapshotCreateVolumePermission.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2_SPOTDATAFEEDSUBSCRIPTION,
      EC2_SpotDatafeedSubscription.GetTypes(),
    ],
    [AWS_ResourceType.EC2_SPOTFLEETREQUEST, EC2_SpotFleetRequest.GetTypes()],
    [
      AWS_ResourceType.EC2_SPOTINSTANCEREQUEST,
      EC2_SpotInstanceRequest.GetTypes(),
    ],
    [AWS_ResourceType.EC2_SUBNET, EC2_Subnet.GetTypes()],
    [
      AWS_ResourceType.EC2_SUBNETCIDRRESERVATION,
      EC2_SubnetCidrReservation.GetTypes(),
    ],
    [AWS_ResourceType.EC2_TAG, EC2_Tag.GetTypes()],
    [
      AWS_ResourceType.EC2_TRAFFICMIRRORFILTER,
      EC2_TrafficMirrorFilter.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2_TRAFFICMIRRORFILTERRULE,
      EC2_TrafficMirrorFilterRule.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2_TRAFFICMIRRORSESSION,
      EC2_TrafficMirrorSession.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2_TRAFFICMIRRORTARGET,
      EC2_TrafficMirrorTarget.GetTypes(),
    ],
    [AWS_ResourceType.EC2_VOLUMEATTACHMENT, EC2_VolumeAttachment.GetTypes()],
    [AWS_ResourceType.EC2_VPC, EC2_Vpc.GetTypes()],
    [AWS_ResourceType.EC2_VPCDHCPOPTIONS, EC2_VpcDhcpOptions.GetTypes()],
    [
      AWS_ResourceType.EC2_VPCDHCPOPTIONSASSOCIATION,
      EC2_VpcDhcpOptionsAssociation.GetTypes(),
    ],
    [AWS_ResourceType.EC2_VPCENDPOINT, EC2_VpcEndpoint.GetTypes()],
    [
      AWS_ResourceType.EC2_VPCENDPOINTCONNECTIONACCEPTER,
      EC2_VpcEndpointConnectionAccepter.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2_VPCENDPOINTCONNECTIONNOTIFICATION,
      EC2_VpcEndpointConnectionNotification.GetTypes(),
    ],
    [AWS_ResourceType.EC2_VPCENDPOINTPOLICY, EC2_VpcEndpointPolicy.GetTypes()],
    [
      AWS_ResourceType.EC2_VPCENDPOINTROUTETABLEASSOCIATION,
      EC2_VpcEndpointRouteTableAssociation.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2_VPCENDPOINTSERVICE,
      EC2_VpcEndpointService.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2_VPCENDPOINTSERVICEALLOWEDPRINCIPLE,
      EC2_VpcEndpointServiceAllowedPrinciple.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2_VPCENDPOINTSUBNETASSOCIATION,
      EC2_VpcEndpointSubnetAssociation.GetTypes(),
    ],
    [AWS_ResourceType.EC2_VPCIPAM, EC2_VpcIpam.GetTypes()],
    [
      AWS_ResourceType.EC2_VPCIPAMORGANIZATIONADMINACCOUNT,
      EC2_VpcIpamOrganizationAdminAccount.GetTypes(),
    ],
    [AWS_ResourceType.EC2_VPCIPAMPOOL, EC2_VpcIpamPool.GetTypes()],
    [AWS_ResourceType.EC2_VPCIPAMPOOLCIDR, EC2_VpcIpamPoolCidr.GetTypes()],
    [
      AWS_ResourceType.EC2_VPCIPAMPOOLCIDRALLOCATION,
      EC2_VpcIpamPoolCidrAllocation.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2_VPCIPAMPREVIEWNEXTCIDR,
      EC2_VpcIpamPreviewNextCidr.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2_VPCIPAMRESOURCEDISCOVERY,
      EC2_VpcIpamResourceDiscovery.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2_VPCIPAMRESOURCEDISCOVERYASSOCIATION,
      EC2_VpcIpamResourceDiscoveryAssociation.GetTypes(),
    ],
    [AWS_ResourceType.EC2_VPCIPAMSCOPE, EC2_VpcIpamScope.GetTypes()],
    [
      AWS_ResourceType.EC2_VPCIPV4CIDRBLOCKASSOCIATION,
      EC2_VpcIpv4CidrBlockAssociation.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2_VPCIPV6CIDRBLOCKASSOCIATION,
      EC2_VpcIpv6CidrBlockAssociation.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2_VPCNETWORKPERFORMANCEMETRICSUBSCRIPTION,
      EC2_VpcNetworkPerformanceMetricSubscription.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2_VPCPEERINGCONNECTION,
      EC2_VpcPeeringConnection.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2_VPCPEERINGCONNECTIONACCEPTER,
      EC2_VpcPeeringConnectionAccepter.GetTypes(),
    ],
    [AWS_ResourceType.EC2_VPNCONNECTION, EC2_VpnConnection.GetTypes()],
    [
      AWS_ResourceType.EC2_VPNCONNECTIONROUTE,
      EC2_VpnConnectionRoute.GetTypes(),
    ],
    [AWS_ResourceType.EC2_VPNGATEWAY, EC2_VpnGateway.GetTypes()],
    [
      AWS_ResourceType.EC2_VPNGATEWAYATTACHMENT,
      EC2_VpnGatewayAttachment.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2_VPNGATEWAYROUTEPROPAGATION,
      EC2_VpnGatewayRoutePropagation.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2CLIENTVPN_AUTHORIZATIONRULE,
      EC2CLIENTVPN_AuthorizationRule.GetTypes(),
    ],
    [AWS_ResourceType.EC2CLIENTVPN_ENDPOINT, EC2CLIENTVPN_Endpoint.GetTypes()],
    [
      AWS_ResourceType.EC2CLIENTVPN_NETWORKASSOCIATION,
      EC2CLIENTVPN_NetworkAssociation.GetTypes(),
    ],
    [AWS_ResourceType.EC2CLIENTVPN_ROUTE, EC2CLIENTVPN_Route.GetTypes()],
    [
      AWS_ResourceType.EC2TRANSITGATEWAY_CONNECT,
      EC2TRANSITGATEWAY_Connect.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2TRANSITGATEWAY_CONNECTPEER,
      EC2TRANSITGATEWAY_ConnectPeer.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2TRANSITGATEWAY_INSTANCECONNECTENDPOINT,
      EC2TRANSITGATEWAY_InstanceConnectEndpoint.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2TRANSITGATEWAY_INSTANCESTATE,
      EC2TRANSITGATEWAY_InstanceState.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2TRANSITGATEWAY_MULTICASTDOMAIN,
      EC2TRANSITGATEWAY_MulticastDomain.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2TRANSITGATEWAY_MULTICASTDOMAINASSOCIATION,
      EC2TRANSITGATEWAY_MulticastDomainAssociation.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2TRANSITGATEWAY_MULTICASTGROUPMEMBER,
      EC2TRANSITGATEWAY_MulticastGroupMember.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2TRANSITGATEWAY_MULTICASTGROUPSOURCE,
      EC2TRANSITGATEWAY_MulticastGroupSource.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2TRANSITGATEWAY_PEERINGATTACHMENT,
      EC2TRANSITGATEWAY_PeeringAttachment.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2TRANSITGATEWAY_PEERINGATTACHMENTACCEPTER,
      EC2TRANSITGATEWAY_PeeringAttachmentAccepter.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2TRANSITGATEWAY_POLICYTABLE,
      EC2TRANSITGATEWAY_PolicyTable.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2TRANSITGATEWAY_POLICYTABLEASSOCIATION,
      EC2TRANSITGATEWAY_PolicyTableAssociation.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2TRANSITGATEWAY_PREFIXLISTREFERENCE,
      EC2TRANSITGATEWAY_PrefixListReference.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2TRANSITGATEWAY_ROUTE,
      EC2TRANSITGATEWAY_Route.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2TRANSITGATEWAY_ROUTETABLE,
      EC2TRANSITGATEWAY_RouteTable.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2TRANSITGATEWAY_ROUTETABLEASSOCIATION,
      EC2TRANSITGATEWAY_RouteTableAssociation.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2TRANSITGATEWAY_ROUTETABLEPROPAGATION,
      EC2TRANSITGATEWAY_RouteTablePropagation.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2TRANSITGATEWAY_TRANSITGATEWAY,
      EC2TRANSITGATEWAY_TransitGateway.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2TRANSITGATEWAY_VPCATTACHMENT,
      EC2TRANSITGATEWAY_VpcAttachment.GetTypes(),
    ],
    [
      AWS_ResourceType.EC2TRANSITGATEWAY_VPCATTACHMENTACCEPTER,
      EC2TRANSITGATEWAY_VpcAttachmentAccepter.GetTypes(),
    ],
    [AWS_ResourceType.ECR_LIFECYCLEPOLICY, ECR_LifecyclePolicy.GetTypes()],
    [
      AWS_ResourceType.ECR_PULLTHROUGHCACHERULE,
      ECR_PullThroughCacheRule.GetTypes(),
    ],
    [AWS_ResourceType.ECR_REGISTRYPOLICY, ECR_RegistryPolicy.GetTypes()],
    [
      AWS_ResourceType.ECR_REGISTRYSCANNINGCONFIGURATION,
      ECR_RegistryScanningConfiguration.GetTypes(),
    ],
    [
      AWS_ResourceType.ECR_REPLICATIONCONFIGURATION,
      ECR_ReplicationConfiguration.GetTypes(),
    ],
    [AWS_ResourceType.ECR_REPOSITORY, ECR_Repository.GetTypes()],
    [AWS_ResourceType.ECR_REPOSITORYPOLICY, ECR_RepositoryPolicy.GetTypes()],
    [AWS_ResourceType.ECRPUBLIC_REPOSITORY, ECRPUBLIC_Repository.GetTypes()],
    [
      AWS_ResourceType.ECRPUBLIC_REPOSITORYPOLICY,
      ECRPUBLIC_RepositoryPolicy.GetTypes(),
    ],
    [
      AWS_ResourceType.ECS_ACCOUNTSETTINGDEFAULT,
      ECS_AccountSettingDefault.GetTypes(),
    ],
    [AWS_ResourceType.ECS_CAPACITYPROVIDER, ECS_CapacityProvider.GetTypes()],
    [AWS_ResourceType.ECS_CLUSTER, ECS_Cluster.GetTypes()],
    [
      AWS_ResourceType.ECS_CLUSTERCAPACITYPROVIDERS,
      ECS_ClusterCapacityProviders.GetTypes(),
    ],
    [AWS_ResourceType.ECS_SERVICE, ECS_Service.GetTypes()],
    [AWS_ResourceType.ECS_TAG, ECS_Tag.GetTypes()],
    [AWS_ResourceType.ECS_TASKDEFINITION, ECS_TaskDefinition.GetTypes()],
    [AWS_ResourceType.ECS_TASKSET, ECS_TaskSet.GetTypes()],
    [AWS_ResourceType.EFS_ACCESSPOINT, EFS_AccessPoint.GetTypes()],
    [AWS_ResourceType.EFS_BACKUPPOLICY, EFS_BackupPolicy.GetTypes()],
    [AWS_ResourceType.EFS_FILESYSTEM, EFS_FileSystem.GetTypes()],
    [AWS_ResourceType.EFS_FILESYSTEMPOLICY, EFS_FileSystemPolicy.GetTypes()],
    [AWS_ResourceType.EFS_MOUNTTARGET, EFS_MountTarget.GetTypes()],
    [
      AWS_ResourceType.EFS_REPLICATIONCONFIGURATION,
      EFS_ReplicationConfiguration.GetTypes(),
    ],
    [AWS_ResourceType.EKS_ACCESSENTRY, EKS_AccessEntry.GetTypes()],
    [
      AWS_ResourceType.EKS_ACCESSPOLICYASSOCIATION,
      EKS_AccessPolicyAssociation.GetTypes(),
    ],
    [AWS_ResourceType.EKS_ADDON, EKS_Addon.GetTypes()],
    [AWS_ResourceType.EKS_CLUSTER, EKS_Cluster.GetTypes()],
    [AWS_ResourceType.EKS_FARGATEPROFILE, EKS_FargateProfile.GetTypes()],
    [
      AWS_ResourceType.EKS_IDENTITYPROVIDERCONFIG,
      EKS_IdentityProviderConfig.GetTypes(),
    ],
    [AWS_ResourceType.EKS_NODEGROUP, EKS_NodeGroup.GetTypes()],
    [
      AWS_ResourceType.EKS_PODIDENTITYASSOCIATION,
      EKS_PodIdentityAssociation.GetTypes(),
    ],
    [AWS_ResourceType.ELASTICACHE_CLUSTER, ELASTICACHE_Cluster.GetTypes()],
    [
      AWS_ResourceType.ELASTICACHE_GLOBALREPLICATIONGROUP,
      ELASTICACHE_GlobalReplicationGroup.GetTypes(),
    ],
    [
      AWS_ResourceType.ELASTICACHE_PARAMETERGROUP,
      ELASTICACHE_ParameterGroup.GetTypes(),
    ],
    [
      AWS_ResourceType.ELASTICACHE_REPLICATIONGROUP,
      ELASTICACHE_ReplicationGroup.GetTypes(),
    ],
    [
      AWS_ResourceType.ELASTICACHE_SERVERLESSCACHE,
      ELASTICACHE_ServerlessCache.GetTypes(),
    ],
    [
      AWS_ResourceType.ELASTICACHE_SUBNETGROUP,
      ELASTICACHE_SubnetGroup.GetTypes(),
    ],
    [AWS_ResourceType.ELASTICACHE_USER, ELASTICACHE_User.GetTypes()],
    [AWS_ResourceType.ELASTICACHE_USERGROUP, ELASTICACHE_UserGroup.GetTypes()],
    [
      AWS_ResourceType.ELASTICACHE_USERGROUPASSOCIATION,
      ELASTICACHE_UserGroupAssociation.GetTypes(),
    ],
    [
      AWS_ResourceType.ELASTICBEANSTALK_APPLICATION,
      ELASTICBEANSTALK_Application.GetTypes(),
    ],
    [
      AWS_ResourceType.ELASTICBEANSTALK_APPLICATIONVERSION,
      ELASTICBEANSTALK_ApplicationVersion.GetTypes(),
    ],
    [
      AWS_ResourceType.ELASTICBEANSTALK_CONFIGURATIONTEMPLATE,
      ELASTICBEANSTALK_ConfigurationTemplate.GetTypes(),
    ],
    [
      AWS_ResourceType.ELASTICBEANSTALK_ENVIRONMENT,
      ELASTICBEANSTALK_Environment.GetTypes(),
    ],
    [AWS_ResourceType.ELASTICSEARCH_DOMAIN, ELASTICSEARCH_Domain.GetTypes()],
    [
      AWS_ResourceType.ELASTICSEARCH_DOMAINPOLICY,
      ELASTICSEARCH_DomainPolicy.GetTypes(),
    ],
    [
      AWS_ResourceType.ELASTICSEARCH_DOMAINSAMLOPTIONS,
      ELASTICSEARCH_DomainSamlOptions.GetTypes(),
    ],
    [
      AWS_ResourceType.ELASTICSEARCH_VPCENDPOINT,
      ELASTICSEARCH_VpcEndpoint.GetTypes(),
    ],
    [
      AWS_ResourceType.ELASTICTRANSCODER_PIPELINE,
      ELASTICTRANSCODER_Pipeline.GetTypes(),
    ],
    [
      AWS_ResourceType.ELASTICTRANSCODER_PRESET,
      ELASTICTRANSCODER_Preset.GetTypes(),
    ],
    [
      AWS_ResourceType.ELB_APPCOOKIESTICKINESSPOLICY,
      ELB_AppCookieStickinessPolicy.GetTypes(),
    ],
    [AWS_ResourceType.ELB_ATTACHMENT, ELB_Attachment.GetTypes()],
    [AWS_ResourceType.ELB_LISTENERPOLICY, ELB_ListenerPolicy.GetTypes()],
    [AWS_ResourceType.ELB_LOADBALANCER, ELB_LoadBalancer.GetTypes()],
    [
      AWS_ResourceType.ELB_LOADBALANCERBACKENDSERVERPOLICY,
      ELB_LoadBalancerBackendServerPolicy.GetTypes(),
    ],
    [
      AWS_ResourceType.ELB_LOADBALANCERCOOKIESTICKINESSPOLICY,
      ELB_LoadBalancerCookieStickinessPolicy.GetTypes(),
    ],
    [
      AWS_ResourceType.ELB_LOADBALANCERPOLICY,
      ELB_LoadBalancerPolicy.GetTypes(),
    ],
    [
      AWS_ResourceType.ELB_SSLNEGOTIATIONPOLICY,
      ELB_SslNegotiationPolicy.GetTypes(),
    ],
    [
      AWS_ResourceType.EMR_BLOCKPUBLICACCESSCONFIGURATION,
      EMR_BlockPublicAccessConfiguration.GetTypes(),
    ],
    [AWS_ResourceType.EMR_CLUSTER, EMR_Cluster.GetTypes()],
    [AWS_ResourceType.EMR_INSTANCEFLEET, EMR_InstanceFleet.GetTypes()],
    [AWS_ResourceType.EMR_INSTANCEGROUP, EMR_InstanceGroup.GetTypes()],
    [
      AWS_ResourceType.EMR_MANAGEDSCALINGPOLICY,
      EMR_ManagedScalingPolicy.GetTypes(),
    ],
    [
      AWS_ResourceType.EMR_SECURITYCONFIGURATION,
      EMR_SecurityConfiguration.GetTypes(),
    ],
    [AWS_ResourceType.EMR_STUDIO, EMR_Studio.GetTypes()],
    [
      AWS_ResourceType.EMR_STUDIOSESSIONMAPPING,
      EMR_StudioSessionMapping.GetTypes(),
    ],
    [
      AWS_ResourceType.EMRCONTAINERS_JOBTEMPLATE,
      EMRCONTAINERS_JobTemplate.GetTypes(),
    ],
    [
      AWS_ResourceType.EMRCONTAINERS_VIRTUALCLUSTER,
      EMRCONTAINERS_VirtualCluster.GetTypes(),
    ],
    [
      AWS_ResourceType.EMRSERVERLESS_APPLICATION,
      EMRSERVERLESS_Application.GetTypes(),
    ],
    [AWS_ResourceType.EVIDENTLY_FEATURE, EVIDENTLY_Feature.GetTypes()],
    [AWS_ResourceType.EVIDENTLY_LAUNCH, EVIDENTLY_Launch.GetTypes()],
    [AWS_ResourceType.EVIDENTLY_PROJECT, EVIDENTLY_Project.GetTypes()],
    [AWS_ResourceType.EVIDENTLY_SEGMENT, EVIDENTLY_Segment.GetTypes()],
    [AWS_ResourceType.FINSPACE_KXCLUSTER, FINSPACE_KxCluster.GetTypes()],
    [AWS_ResourceType.FINSPACE_KXDATABASE, FINSPACE_KxDatabase.GetTypes()],
    [AWS_ResourceType.FINSPACE_KXDATAVIEW, FINSPACE_KxDataview.GetTypes()],
    [
      AWS_ResourceType.FINSPACE_KXENVIRONMENT,
      FINSPACE_KxEnvironment.GetTypes(),
    ],
    [
      AWS_ResourceType.FINSPACE_KXSCALINGGROUP,
      FINSPACE_KxScalingGroup.GetTypes(),
    ],
    [AWS_ResourceType.FINSPACE_KXUSER, FINSPACE_KxUser.GetTypes()],
    [AWS_ResourceType.FINSPACE_KXVOLUME, FINSPACE_KxVolume.GetTypes()],
    [
      AWS_ResourceType.FIS_EXPERIMENTTEMPLATE,
      FIS_ExperimentTemplate.GetTypes(),
    ],
    [AWS_ResourceType.FMS_ADMINACCOUNT, FMS_AdminAccount.GetTypes()],
    [AWS_ResourceType.FMS_POLICY, FMS_Policy.GetTypes()],
    [AWS_ResourceType.FSX_BACKUP, FSX_Backup.GetTypes()],
    [
      AWS_ResourceType.FSX_DATAREPOSITORYASSOCIATION,
      FSX_DataRepositoryAssociation.GetTypes(),
    ],
    [AWS_ResourceType.FSX_FILECACHE, FSX_FileCache.GetTypes()],
    [AWS_ResourceType.FSX_LUSTREFILESYSTEM, FSX_LustreFileSystem.GetTypes()],
    [AWS_ResourceType.FSX_ONTAPFILESYSTEM, FSX_OntapFileSystem.GetTypes()],
    [
      AWS_ResourceType.FSX_ONTAPSTORAGEVIRTUALMACHINE,
      FSX_OntapStorageVirtualMachine.GetTypes(),
    ],
    [AWS_ResourceType.FSX_ONTAPVOLUME, FSX_OntapVolume.GetTypes()],
    [AWS_ResourceType.FSX_OPENZFSFILESYSTEM, FSX_OpenZfsFileSystem.GetTypes()],
    [AWS_ResourceType.FSX_OPENZFSSNAPSHOT, FSX_OpenZfsSnapshot.GetTypes()],
    [AWS_ResourceType.FSX_OPENZFSVOLUME, FSX_OpenZfsVolume.GetTypes()],
    [AWS_ResourceType.FSX_WINDOWSFILESYSTEM, FSX_WindowsFileSystem.GetTypes()],
    [AWS_ResourceType.GAMELIFT_ALIAS, GAMELIFT_Alias.GetTypes()],
    [AWS_ResourceType.GAMELIFT_BUILD, GAMELIFT_Build.GetTypes()],
    [AWS_ResourceType.GAMELIFT_FLEET, GAMELIFT_Fleet.GetTypes()],
    [
      AWS_ResourceType.GAMELIFT_GAMESERVERGROUP,
      GAMELIFT_GameServerGroup.GetTypes(),
    ],
    [
      AWS_ResourceType.GAMELIFT_GAMESESSIONQUEUE,
      GAMELIFT_GameSessionQueue.GetTypes(),
    ],
    [
      AWS_ResourceType.GAMELIFT_MATCHMAKINGCONFIGURATION,
      GAMELIFT_MatchmakingConfiguration.GetTypes(),
    ],
    [
      AWS_ResourceType.GAMELIFT_MATCHMAKINGRULESET,
      GAMELIFT_MatchmakingRuleSet.GetTypes(),
    ],
    [AWS_ResourceType.GAMELIFT_SCRIPT, GAMELIFT_Script.GetTypes()],
    [AWS_ResourceType.GLACIER_VAULT, GLACIER_Vault.GetTypes()],
    [AWS_ResourceType.GLACIER_VAULTLOCK, GLACIER_VaultLock.GetTypes()],
    [
      AWS_ResourceType.GLOBALACCELERATOR_ACCELERATOR,
      GLOBALACCELERATOR_Accelerator.GetTypes(),
    ],
    [
      AWS_ResourceType.GLOBALACCELERATOR_CUSTOMROUTINGACCELERATOR,
      GLOBALACCELERATOR_CustomRoutingAccelerator.GetTypes(),
    ],
    [
      AWS_ResourceType.GLOBALACCELERATOR_CUSTOMROUTINGENDPOINTGROUP,
      GLOBALACCELERATOR_CustomRoutingEndpointGroup.GetTypes(),
    ],
    [
      AWS_ResourceType.GLOBALACCELERATOR_CUSTOMROUTINGLISTENER,
      GLOBALACCELERATOR_CustomRoutingListener.GetTypes(),
    ],
    [
      AWS_ResourceType.GLOBALACCELERATOR_ENDPOINTGROUP,
      GLOBALACCELERATOR_EndpointGroup.GetTypes(),
    ],
    [
      AWS_ResourceType.GLOBALACCELERATOR_LISTENER,
      GLOBALACCELERATOR_Listener.GetTypes(),
    ],
    [AWS_ResourceType.GLUE_CATALOGDATABASE, GLUE_CatalogDatabase.GetTypes()],
    [AWS_ResourceType.GLUE_CATALOGTABLE, GLUE_CatalogTable.GetTypes()],
    [AWS_ResourceType.GLUE_CLASSIFIER, GLUE_Classifier.GetTypes()],
    [AWS_ResourceType.GLUE_CONNECTION, GLUE_Connection.GetTypes()],
    [AWS_ResourceType.GLUE_CRAWLER, GLUE_Crawler.GetTypes()],
    [
      AWS_ResourceType.GLUE_DATACATALOGENCRYPTIONSETTINGS,
      GLUE_DataCatalogEncryptionSettings.GetTypes(),
    ],
    [
      AWS_ResourceType.GLUE_DATAQUALITYRULESET,
      GLUE_DataQualityRuleset.GetTypes(),
    ],
    [AWS_ResourceType.GLUE_DEVENDPOINT, GLUE_DevEndpoint.GetTypes()],
    [AWS_ResourceType.GLUE_JOB, GLUE_Job.GetTypes()],
    [AWS_ResourceType.GLUE_MLTRANSFORM, GLUE_MLTransform.GetTypes()],
    [AWS_ResourceType.GLUE_PARTITION, GLUE_Partition.GetTypes()],
    [AWS_ResourceType.GLUE_PARTITIONINDEX, GLUE_PartitionIndex.GetTypes()],
    [AWS_ResourceType.GLUE_REGISTRY, GLUE_Registry.GetTypes()],
    [AWS_ResourceType.GLUE_RESOURCEPOLICY, GLUE_ResourcePolicy.GetTypes()],
    [AWS_ResourceType.GLUE_SCHEMA, GLUE_Schema.GetTypes()],
    [
      AWS_ResourceType.GLUE_SECURITYCONFIGURATION,
      GLUE_SecurityConfiguration.GetTypes(),
    ],
    [AWS_ResourceType.GLUE_TRIGGER, GLUE_Trigger.GetTypes()],
    [
      AWS_ResourceType.GLUE_USERDEFINEDFUNCTION,
      GLUE_UserDefinedFunction.GetTypes(),
    ],
    [AWS_ResourceType.GLUE_WORKFLOW, GLUE_Workflow.GetTypes()],
    [
      AWS_ResourceType.GRAFANA_LICENSEASSOCIATION,
      GRAFANA_LicenseAssociation.GetTypes(),
    ],
    [
      AWS_ResourceType.GRAFANA_ROLEASSOCIATION,
      GRAFANA_RoleAssociation.GetTypes(),
    ],
    [AWS_ResourceType.GRAFANA_WORKSPACE, GRAFANA_Workspace.GetTypes()],
    [
      AWS_ResourceType.GRAFANA_WORKSPACEAPIKEY,
      GRAFANA_WorkspaceApiKey.GetTypes(),
    ],
    [
      AWS_ResourceType.GRAFANA_WORKSPACESAMLCONFIGURATION,
      GRAFANA_WorkspaceSamlConfiguration.GetTypes(),
    ],
    [AWS_ResourceType.GUARDDUTY_DETECTOR, GUARDDUTY_Detector.GetTypes()],
    [
      AWS_ResourceType.GUARDDUTY_DETECTORFEATURE,
      GUARDDUTY_DetectorFeature.GetTypes(),
    ],
    [AWS_ResourceType.GUARDDUTY_FILTER, GUARDDUTY_Filter.GetTypes()],
    [
      AWS_ResourceType.GUARDDUTY_INVITEACCEPTER,
      GUARDDUTY_InviteAccepter.GetTypes(),
    ],
    [AWS_ResourceType.GUARDDUTY_IPSET, GUARDDUTY_IPSet.GetTypes()],
    [AWS_ResourceType.GUARDDUTY_MEMBER, GUARDDUTY_Member.GetTypes()],
    [
      AWS_ResourceType.GUARDDUTY_ORGANIZATIONADMINACCOUNT,
      GUARDDUTY_OrganizationAdminAccount.GetTypes(),
    ],
    [
      AWS_ResourceType.GUARDDUTY_ORGANIZATIONCONFIGURATION,
      GUARDDUTY_OrganizationConfiguration.GetTypes(),
    ],
    [
      AWS_ResourceType.GUARDDUTY_ORGANIZATIONCONFIGURATIONFEATURE,
      GUARDDUTY_OrganizationConfigurationFeature.GetTypes(),
    ],
    [
      AWS_ResourceType.GUARDDUTY_PUBLISHINGDESTINATION,
      GUARDDUTY_PublishingDestination.GetTypes(),
    ],
    [
      AWS_ResourceType.GUARDDUTY_THREATINTELSET,
      GUARDDUTY_ThreatIntelSet.GetTypes(),
    ],
    [AWS_ResourceType.IAM_ACCESSKEY, IAM_AccessKey.GetTypes()],
    [AWS_ResourceType.IAM_ACCOUNTALIAS, IAM_AccountAlias.GetTypes()],
    [
      AWS_ResourceType.IAM_ACCOUNTPASSWORDPOLICY,
      IAM_AccountPasswordPolicy.GetTypes(),
    ],
    [AWS_ResourceType.IAM_GROUP, IAM_Group.GetTypes()],
    [AWS_ResourceType.IAM_GROUPMEMBERSHIP, IAM_GroupMembership.GetTypes()],
    [AWS_ResourceType.IAM_GROUPPOLICY, IAM_GroupPolicy.GetTypes()],
    [
      AWS_ResourceType.IAM_GROUPPOLICYATTACHMENT,
      IAM_GroupPolicyAttachment.GetTypes(),
    ],
    [AWS_ResourceType.IAM_INSTANCEPROFILE, IAM_InstanceProfile.GetTypes()],
    [
      AWS_ResourceType.IAM_OPENIDCONNECTPROVIDER,
      IAM_OpenIdConnectProvider.GetTypes(),
    ],
    [AWS_ResourceType.IAM_POLICY, IAM_Policy.GetTypes()],
    [AWS_ResourceType.IAM_POLICYATTACHMENT, IAM_PolicyAttachment.GetTypes()],
    [AWS_ResourceType.IAM_ROLE, IAM_Role.GetTypes()],
    [AWS_ResourceType.IAM_ROLEPOLICY, IAM_RolePolicy.GetTypes()],
    [
      AWS_ResourceType.IAM_ROLEPOLICYATTACHMENT,
      IAM_RolePolicyAttachment.GetTypes(),
    ],
    [AWS_ResourceType.IAM_SAMLPROVIDER, IAM_SamlProvider.GetTypes()],
    [
      AWS_ResourceType.IAM_SECURITYTOKENSERVICEPREFERENCES,
      IAM_SecurityTokenServicePreferences.GetTypes(),
    ],
    [AWS_ResourceType.IAM_SERVERCERTIFICATE, IAM_ServerCertificate.GetTypes()],
    [AWS_ResourceType.IAM_SERVICELINKEDROLE, IAM_ServiceLinkedRole.GetTypes()],
    [
      AWS_ResourceType.IAM_SERVICESPECIFICCREDENTIAL,
      IAM_ServiceSpecificCredential.GetTypes(),
    ],
    [
      AWS_ResourceType.IAM_SIGNINGCERTIFICATE,
      IAM_SigningCertificate.GetTypes(),
    ],
    [AWS_ResourceType.IAM_SSHKEY, IAM_SshKey.GetTypes()],
    [AWS_ResourceType.IAM_USER, IAM_User.GetTypes()],
    [
      AWS_ResourceType.IAM_USERGROUPMEMBERSHIP,
      IAM_UserGroupMembership.GetTypes(),
    ],
    [AWS_ResourceType.IAM_USERLOGINPROFILE, IAM_UserLoginProfile.GetTypes()],
    [AWS_ResourceType.IAM_USERPOLICY, IAM_UserPolicy.GetTypes()],
    [
      AWS_ResourceType.IAM_USERPOLICYATTACHMENT,
      IAM_UserPolicyAttachment.GetTypes(),
    ],
    [AWS_ResourceType.IAM_VIRTUALMFADEVICE, IAM_VirtualMfaDevice.GetTypes()],
    [AWS_ResourceType.IDENTITYSTORE_GROUP, IDENTITYSTORE_Group.GetTypes()],
    [
      AWS_ResourceType.IDENTITYSTORE_GROUPMEMBERSHIP,
      IDENTITYSTORE_GroupMembership.GetTypes(),
    ],
    [AWS_ResourceType.IDENTITYSTORE_USER, IDENTITYSTORE_User.GetTypes()],
    [
      AWS_ResourceType.IMAGEBUILDER_COMPONENT,
      IMAGEBUILDER_Component.GetTypes(),
    ],
    [
      AWS_ResourceType.IMAGEBUILDER_CONTAINERRECIPE,
      IMAGEBUILDER_ContainerRecipe.GetTypes(),
    ],
    [
      AWS_ResourceType.IMAGEBUILDER_DISTRIBUTIONCONFIGURATION,
      IMAGEBUILDER_DistributionConfiguration.GetTypes(),
    ],
    [AWS_ResourceType.IMAGEBUILDER_IMAGE, IMAGEBUILDER_Image.GetTypes()],
    [
      AWS_ResourceType.IMAGEBUILDER_IMAGEPIPELINE,
      IMAGEBUILDER_ImagePipeline.GetTypes(),
    ],
    [
      AWS_ResourceType.IMAGEBUILDER_IMAGERECIPE,
      IMAGEBUILDER_ImageRecipe.GetTypes(),
    ],
    [
      AWS_ResourceType.IMAGEBUILDER_INFRASTRUCTURECONFIGURATION,
      IMAGEBUILDER_InfrastructureConfiguration.GetTypes(),
    ],
    [AWS_ResourceType.IMAGEBUILDER_WORKFLOW, IMAGEBUILDER_Workflow.GetTypes()],
    [
      AWS_ResourceType.INSPECTOR_ASSESSMENTTARGET,
      INSPECTOR_AssessmentTarget.GetTypes(),
    ],
    [
      AWS_ResourceType.INSPECTOR_ASSESSMENTTEMPLATE,
      INSPECTOR_AssessmentTemplate.GetTypes(),
    ],
    [
      AWS_ResourceType.INSPECTOR_RESOURCEGROUP,
      INSPECTOR_ResourceGroup.GetTypes(),
    ],
    [
      AWS_ResourceType.INSPECTOR2_DELEGATEDADMINACCOUNT,
      INSPECTOR2_DelegatedAdminAccount.GetTypes(),
    ],
    [AWS_ResourceType.INSPECTOR2_ENABLER, INSPECTOR2_Enabler.GetTypes()],
    [
      AWS_ResourceType.INSPECTOR2_MEMBERASSOCIATION,
      INSPECTOR2_MemberAssociation.GetTypes(),
    ],
    [
      AWS_ResourceType.INSPECTOR2_ORGANIZATIONCONFIGURATION,
      INSPECTOR2_OrganizationConfiguration.GetTypes(),
    ],
    [AWS_ResourceType.IOT_AUTHORIZER, IOT_Authorizer.GetTypes()],
    [AWS_ResourceType.IOT_BILLINGGROUP, IOT_BillingGroup.GetTypes()],
    [AWS_ResourceType.IOT_CACERTIFICATE, IOT_CaCertificate.GetTypes()],
    [AWS_ResourceType.IOT_CERTIFICATE, IOT_Certificate.GetTypes()],
    [
      AWS_ResourceType.IOT_DOMAINCONFIGURATION,
      IOT_DomainConfiguration.GetTypes(),
    ],
    [
      AWS_ResourceType.IOT_EVENTCONFIGURATIONS,
      IOT_EventConfigurations.GetTypes(),
    ],
    [
      AWS_ResourceType.IOT_INDEXINGCONFIGURATION,
      IOT_IndexingConfiguration.GetTypes(),
    ],
    [AWS_ResourceType.IOT_LOGGINGOPTIONS, IOT_LoggingOptions.GetTypes()],
    [AWS_ResourceType.IOT_POLICY, IOT_Policy.GetTypes()],
    [AWS_ResourceType.IOT_POLICYATTACHMENT, IOT_PolicyAttachment.GetTypes()],
    [
      AWS_ResourceType.IOT_PROVISIONINGTEMPLATE,
      IOT_ProvisioningTemplate.GetTypes(),
    ],
    [AWS_ResourceType.IOT_ROLEALIAS, IOT_RoleAlias.GetTypes()],
    [AWS_ResourceType.IOT_THING, IOT_Thing.GetTypes()],
    [AWS_ResourceType.IOT_THINGGROUP, IOT_ThingGroup.GetTypes()],
    [
      AWS_ResourceType.IOT_THINGGROUPMEMBERSHIP,
      IOT_ThingGroupMembership.GetTypes(),
    ],
    [
      AWS_ResourceType.IOT_THINGPRINCIPALATTACHMENT,
      IOT_ThingPrincipalAttachment.GetTypes(),
    ],
    [AWS_ResourceType.IOT_THINGTYPE, IOT_ThingType.GetTypes()],
    [AWS_ResourceType.IOT_TOPICRULE, IOT_TopicRule.GetTypes()],
    [
      AWS_ResourceType.IOT_TOPICRULEDESTINATION,
      IOT_TopicRuleDestination.GetTypes(),
    ],
    [AWS_ResourceType.IVS_CHANNEL, IVS_Channel.GetTypes()],
    [AWS_ResourceType.IVS_PLAYBACKKEYPAIR, IVS_PlaybackKeyPair.GetTypes()],
    [
      AWS_ResourceType.IVS_RECORDINGCONFIGURATION,
      IVS_RecordingConfiguration.GetTypes(),
    ],
    [
      AWS_ResourceType.IVSCHAT_LOGGINGCONFIGURATION,
      IVSCHAT_LoggingConfiguration.GetTypes(),
    ],
    [AWS_ResourceType.IVSCHAT_ROOM, IVSCHAT_Room.GetTypes()],
    [AWS_ResourceType.KENDRA_DATASOURCE, KENDRA_DataSource.GetTypes()],
    [AWS_ResourceType.KENDRA_EXPERIENCE, KENDRA_Experience.GetTypes()],
    [AWS_ResourceType.KENDRA_FAQ, KENDRA_Faq.GetTypes()],
    [AWS_ResourceType.KENDRA_INDEX, KENDRA_Index.GetTypes()],
    [
      AWS_ResourceType.KENDRA_QUERYSUGGESTIONSBLOCKLIST,
      KENDRA_QuerySuggestionsBlockList.GetTypes(),
    ],
    [AWS_ResourceType.KENDRA_THESAURUS, KENDRA_Thesaurus.GetTypes()],
    [AWS_ResourceType.KEYSPACES_KEYSPACE, KEYSPACES_Keyspace.GetTypes()],
    [AWS_ResourceType.KEYSPACES_TABLE, KEYSPACES_Table.GetTypes()],
    [
      AWS_ResourceType.KINESIS_ANALYTICSAPPLICATION,
      KINESIS_AnalyticsApplication.GetTypes(),
    ],
    [
      AWS_ResourceType.KINESIS_FIREHOSEDELIVERYSTREAM,
      KINESIS_FirehoseDeliveryStream.GetTypes(),
    ],
    [
      AWS_ResourceType.KINESIS_RESOURCEPOLICY,
      KINESIS_ResourcePolicy.GetTypes(),
    ],
    [AWS_ResourceType.KINESIS_STREAM, KINESIS_Stream.GetTypes()],
    [
      AWS_ResourceType.KINESIS_STREAMCONSUMER,
      KINESIS_StreamConsumer.GetTypes(),
    ],
    [AWS_ResourceType.KINESIS_VIDEOSTREAM, KINESIS_VideoStream.GetTypes()],
    [
      AWS_ResourceType.KINESISANALYTICSV2_APPLICATION,
      KINESISANALYTICSV2_Application.GetTypes(),
    ],
    [
      AWS_ResourceType.KINESISANALYTICSV2_APPLICATIONSNAPSHOT,
      KINESISANALYTICSV2_ApplicationSnapshot.GetTypes(),
    ],
    [AWS_ResourceType.KMS_ALIAS, KMS_Alias.GetTypes()],
    [AWS_ResourceType.KMS_CIPHERTEXT, KMS_Ciphertext.GetTypes()],
    [AWS_ResourceType.KMS_CUSTOMKEYSTORE, KMS_CustomKeyStore.GetTypes()],
    [AWS_ResourceType.KMS_EXTERNALKEY, KMS_ExternalKey.GetTypes()],
    [AWS_ResourceType.KMS_GRANT, KMS_Grant.GetTypes()],
    [AWS_ResourceType.KMS_KEY, KMS_Key.GetTypes()],
    [AWS_ResourceType.KMS_KEYPOLICY, KMS_KeyPolicy.GetTypes()],
    [
      AWS_ResourceType.KMS_REPLICAEXTERNALKEY,
      KMS_ReplicaExternalKey.GetTypes(),
    ],
    [AWS_ResourceType.KMS_REPLICAKEY, KMS_ReplicaKey.GetTypes()],
    [
      AWS_ResourceType.LAKEFORMATION_DATALAKESETTINGS,
      LAKEFORMATION_DataLakeSettings.GetTypes(),
    ],
    [AWS_ResourceType.LAKEFORMATION_LFTAG, LAKEFORMATION_LfTag.GetTypes()],
    [
      AWS_ResourceType.LAKEFORMATION_PERMISSIONS,
      LAKEFORMATION_Permissions.GetTypes(),
    ],
    [
      AWS_ResourceType.LAKEFORMATION_RESOURCE,
      LAKEFORMATION_Resource.GetTypes(),
    ],
    [
      AWS_ResourceType.LAKEFORMATION_RESOURCELFTAGS,
      LAKEFORMATION_ResourceLfTags.GetTypes(),
    ],
    [AWS_ResourceType.LAMBDA_ALIAS, LAMBDA_Alias.GetTypes()],
    [
      AWS_ResourceType.LAMBDA_CODESIGNINGCONFIG,
      LAMBDA_CodeSigningConfig.GetTypes(),
    ],
    [
      AWS_ResourceType.LAMBDA_EVENTSOURCEMAPPING,
      LAMBDA_EventSourceMapping.GetTypes(),
    ],
    [AWS_ResourceType.LAMBDA_FUNCTION, LAMBDA_Function.GetTypes()],
    [
      AWS_ResourceType.LAMBDA_FUNCTIONEVENTINVOKECONFIG,
      LAMBDA_FunctionEventInvokeConfig.GetTypes(),
    ],
    [AWS_ResourceType.LAMBDA_FUNCTIONURL, LAMBDA_FunctionUrl.GetTypes()],
    [AWS_ResourceType.LAMBDA_INVOCATION, LAMBDA_Invocation.GetTypes()],
    [AWS_ResourceType.LAMBDA_LAYERVERSION, LAMBDA_LayerVersion.GetTypes()],
    [
      AWS_ResourceType.LAMBDA_LAYERVERSIONPERMISSION,
      LAMBDA_LayerVersionPermission.GetTypes(),
    ],
    [AWS_ResourceType.LAMBDA_PERMISSION, LAMBDA_Permission.GetTypes()],
    [
      AWS_ResourceType.LAMBDA_PROVISIONEDCONCURRENCYCONFIG,
      LAMBDA_ProvisionedConcurrencyConfig.GetTypes(),
    ],
    [AWS_ResourceType.LB_LISTENER, LB_Listener.GetTypes()],
    [
      AWS_ResourceType.LB_LISTENERCERTIFICATE,
      LB_ListenerCertificate.GetTypes(),
    ],
    [AWS_ResourceType.LB_LISTENERRULE, LB_ListenerRule.GetTypes()],
    [AWS_ResourceType.LB_LOADBALANCER, LB_LoadBalancer.GetTypes()],
    [AWS_ResourceType.LB_TARGETGROUP, LB_TargetGroup.GetTypes()],
    [
      AWS_ResourceType.LB_TARGETGROUPATTACHMENT,
      LB_TargetGroupAttachment.GetTypes(),
    ],
    [AWS_ResourceType.LB_TRUSTSTORE, LB_TrustStore.GetTypes()],
    [
      AWS_ResourceType.LB_TRUSTSTOREREVOCATION,
      LB_TrustStoreRevocation.GetTypes(),
    ],
    [AWS_ResourceType.LEX_BOT, LEX_Bot.GetTypes()],
    [AWS_ResourceType.LEX_BOTALIAS, LEX_BotAlias.GetTypes()],
    [AWS_ResourceType.LEX_INTENT, LEX_Intent.GetTypes()],
    [AWS_ResourceType.LEX_SLOTTYPE, LEX_SlotType.GetTypes()],
    [AWS_ResourceType.LEX_V2MODELSBOT, LEX_V2modelsBot.GetTypes()],
    [AWS_ResourceType.LEX_V2MODELSBOTLOCALE, LEX_V2modelsBotLocale.GetTypes()],
    [
      AWS_ResourceType.LEX_V2MODELSBOTVERSION,
      LEX_V2modelsBotVersion.GetTypes(),
    ],
    [AWS_ResourceType.LEX_V2MODELSINTENT, LEX_V2modelsIntent.GetTypes()],
    [AWS_ResourceType.LEX_V2MODELSSLOT, LEX_V2modelsSlot.GetTypes()],
    [AWS_ResourceType.LEX_V2MODELSSLOTTYPE, LEX_V2modelsSlotType.GetTypes()],
    [
      AWS_ResourceType.LICENSEMANAGER_ASSOCIATION,
      LICENSEMANAGER_Association.GetTypes(),
    ],
    [
      AWS_ResourceType.LICENSEMANAGER_LICENSECONFIGURATION,
      LICENSEMANAGER_LicenseConfiguration.GetTypes(),
    ],
    [
      AWS_ResourceType.LICENSEMANAGER_LICENSEGRANT,
      LICENSEMANAGER_LicenseGrant.GetTypes(),
    ],
    [
      AWS_ResourceType.LICENSEMANAGER_LICENSEGRANTACCEPTER,
      LICENSEMANAGER_LicenseGrantAccepter.GetTypes(),
    ],
    [AWS_ResourceType.LIGHTSAIL_BUCKET, LIGHTSAIL_Bucket.GetTypes()],
    [
      AWS_ResourceType.LIGHTSAIL_BUCKETACCESSKEY,
      LIGHTSAIL_BucketAccessKey.GetTypes(),
    ],
    [
      AWS_ResourceType.LIGHTSAIL_BUCKETRESOURCEACCESS,
      LIGHTSAIL_BucketResourceAccess.GetTypes(),
    ],
    [AWS_ResourceType.LIGHTSAIL_CERTIFICATE, LIGHTSAIL_Certificate.GetTypes()],
    [
      AWS_ResourceType.LIGHTSAIL_CONTAINERSERVICE,
      LIGHTSAIL_ContainerService.GetTypes(),
    ],
    [
      AWS_ResourceType.LIGHTSAIL_CONTAINERSERVICEDEPLOYMENTVERSION,
      LIGHTSAIL_ContainerServiceDeploymentVersion.GetTypes(),
    ],
    [AWS_ResourceType.LIGHTSAIL_DATABASE, LIGHTSAIL_Database.GetTypes()],
    [AWS_ResourceType.LIGHTSAIL_DISK, LIGHTSAIL_Disk.GetTypes()],
    [
      AWS_ResourceType.LIGHTSAIL_DISK_ATTACHMENT,
      LIGHTSAIL_Disk_attachment.GetTypes(),
    ],
    [
      AWS_ResourceType.LIGHTSAIL_DISTRIBUTION,
      LIGHTSAIL_Distribution.GetTypes(),
    ],
    [AWS_ResourceType.LIGHTSAIL_DOMAIN, LIGHTSAIL_Domain.GetTypes()],
    [AWS_ResourceType.LIGHTSAIL_DOMAINENTRY, LIGHTSAIL_DomainEntry.GetTypes()],
    [AWS_ResourceType.LIGHTSAIL_INSTANCE, LIGHTSAIL_Instance.GetTypes()],
    [
      AWS_ResourceType.LIGHTSAIL_INSTANCEPUBLICPORTS,
      LIGHTSAIL_InstancePublicPorts.GetTypes(),
    ],
    [AWS_ResourceType.LIGHTSAIL_KEYPAIR, LIGHTSAIL_KeyPair.GetTypes()],
    [AWS_ResourceType.LIGHTSAIL_LB, LIGHTSAIL_Lb.GetTypes()],
    [
      AWS_ResourceType.LIGHTSAIL_LBATTACHMENT,
      LIGHTSAIL_LbAttachment.GetTypes(),
    ],
    [
      AWS_ResourceType.LIGHTSAIL_LBCERTIFICATE,
      LIGHTSAIL_LbCertificate.GetTypes(),
    ],
    [
      AWS_ResourceType.LIGHTSAIL_LBCERTIFICATEATTACHMENT,
      LIGHTSAIL_LbCertificateAttachment.GetTypes(),
    ],
    [
      AWS_ResourceType.LIGHTSAIL_LBHTTPSREDIRECTIONPOLICY,
      LIGHTSAIL_LbHttpsRedirectionPolicy.GetTypes(),
    ],
    [
      AWS_ResourceType.LIGHTSAIL_LBSTICKINESSPOLICY,
      LIGHTSAIL_LbStickinessPolicy.GetTypes(),
    ],
    [AWS_ResourceType.LIGHTSAIL_STATICIP, LIGHTSAIL_StaticIp.GetTypes()],
    [
      AWS_ResourceType.LIGHTSAIL_STATICIPATTACHMENT,
      LIGHTSAIL_StaticIpAttachment.GetTypes(),
    ],
    [
      AWS_ResourceType.LOCATION_GEOFENCECOLLECTION,
      LOCATION_GeofenceCollection.GetTypes(),
    ],
    [AWS_ResourceType.LOCATION_MAP, LOCATION_Map.GetTypes()],
    [AWS_ResourceType.LOCATION_PLACEINDEX, LOCATION_PlaceIndex.GetTypes()],
    [
      AWS_ResourceType.LOCATION_ROUTECALCULATION,
      LOCATION_RouteCalculation.GetTypes(),
    ],
    [AWS_ResourceType.LOCATION_TRACKER, LOCATION_Tracker.GetTypes()],
    [
      AWS_ResourceType.LOCATION_TRACKERASSOCIATION,
      LOCATION_TrackerAssociation.GetTypes(),
    ],
    [
      AWS_ResourceType.MACIE_CUSTOMDATAIDENTIFIER,
      MACIE_CustomDataIdentifier.GetTypes(),
    ],
    [AWS_ResourceType.MACIE_FINDINGSFILTER, MACIE_FindingsFilter.GetTypes()],
    [AWS_ResourceType.MACIE2_ACCOUNT, MACIE2_Account.GetTypes()],
    [
      AWS_ResourceType.MACIE2_CLASSIFICATIONEXPORTCONFIGURATION,
      MACIE2_ClassificationExportConfiguration.GetTypes(),
    ],
    [
      AWS_ResourceType.MACIE2_CLASSIFICATIONJOB,
      MACIE2_ClassificationJob.GetTypes(),
    ],
    [
      AWS_ResourceType.MACIE2_INVITATIONACCEPTER,
      MACIE2_InvitationAccepter.GetTypes(),
    ],
    [AWS_ResourceType.MACIE2_MEMBER, MACIE2_Member.GetTypes()],
    [
      AWS_ResourceType.MACIE2_ORGANIZATIONADMINACCOUNT,
      MACIE2_OrganizationAdminAccount.GetTypes(),
    ],
    [AWS_ResourceType.MEDIACONVERT_QUEUE, MEDIACONVERT_Queue.GetTypes()],
    [AWS_ResourceType.MEDIALIVE_CHANNEL, MEDIALIVE_Channel.GetTypes()],
    [AWS_ResourceType.MEDIALIVE_INPUT, MEDIALIVE_Input.GetTypes()],
    [
      AWS_ResourceType.MEDIALIVE_INPUTSECURITYGROUP,
      MEDIALIVE_InputSecurityGroup.GetTypes(),
    ],
    [AWS_ResourceType.MEDIALIVE_MULTIPLEX, MEDIALIVE_Multiplex.GetTypes()],
    [
      AWS_ResourceType.MEDIALIVE_MULTIPLEXPROGRAM,
      MEDIALIVE_MultiplexProgram.GetTypes(),
    ],
    [AWS_ResourceType.MEDIAPACKAGE_CHANNEL, MEDIAPACKAGE_Channel.GetTypes()],
    [AWS_ResourceType.MEDIASTORE_CONTAINER, MEDIASTORE_Container.GetTypes()],
    [
      AWS_ResourceType.MEDIASTORE_CONTAINERPOLICY,
      MEDIASTORE_ContainerPolicy.GetTypes(),
    ],
    [AWS_ResourceType.MEMORYDB_ACL, MEMORYDB_Acl.GetTypes()],
    [AWS_ResourceType.MEMORYDB_CLUSTER, MEMORYDB_Cluster.GetTypes()],
    [
      AWS_ResourceType.MEMORYDB_PARAMETERGROUP,
      MEMORYDB_ParameterGroup.GetTypes(),
    ],
    [AWS_ResourceType.MEMORYDB_SNAPSHOT, MEMORYDB_Snapshot.GetTypes()],
    [AWS_ResourceType.MEMORYDB_SUBNETGROUP, MEMORYDB_SubnetGroup.GetTypes()],
    [AWS_ResourceType.MEMORYDB_USER, MEMORYDB_User.GetTypes()],
    [AWS_ResourceType.MQ_BROKER, MQ_Broker.GetTypes()],
    [AWS_ResourceType.MQ_CONFIGURATION, MQ_Configuration.GetTypes()],
    [AWS_ResourceType.MSK_CLUSTER, MSK_Cluster.GetTypes()],
    [AWS_ResourceType.MSK_CLUSTERPOLICY, MSK_ClusterPolicy.GetTypes()],
    [AWS_ResourceType.MSK_CONFIGURATION, MSK_Configuration.GetTypes()],
    [AWS_ResourceType.MSK_REPLICATOR, MSK_Replicator.GetTypes()],
    [
      AWS_ResourceType.MSK_SCRAMSECRETASSOCIATION,
      MSK_ScramSecretAssociation.GetTypes(),
    ],
    [AWS_ResourceType.MSK_SERVERLESSCLUSTER, MSK_ServerlessCluster.GetTypes()],
    [AWS_ResourceType.MSK_VPCCONNECTION, MSK_VpcConnection.GetTypes()],
    [AWS_ResourceType.MSKCONNECT_CONNECTOR, MSKCONNECT_Connector.GetTypes()],
    [
      AWS_ResourceType.MSKCONNECT_CUSTOMPLUGIN,
      MSKCONNECT_CustomPlugin.GetTypes(),
    ],
    [
      AWS_ResourceType.MSKCONNECT_WORKERCONFIGURATION,
      MSKCONNECT_WorkerConfiguration.GetTypes(),
    ],
    [AWS_ResourceType.MWAA_ENVIRONMENT, MWAA_Environment.GetTypes()],
    [AWS_ResourceType.NEPTUNE_CLUSTER, NEPTUNE_Cluster.GetTypes()],
    [
      AWS_ResourceType.NEPTUNE_CLUSTERENDPOINT,
      NEPTUNE_ClusterEndpoint.GetTypes(),
    ],
    [
      AWS_ResourceType.NEPTUNE_CLUSTERINSTANCE,
      NEPTUNE_ClusterInstance.GetTypes(),
    ],
    [
      AWS_ResourceType.NEPTUNE_CLUSTERPARAMETERGROUP,
      NEPTUNE_ClusterParameterGroup.GetTypes(),
    ],
    [
      AWS_ResourceType.NEPTUNE_CLUSTERSNAPSHOT,
      NEPTUNE_ClusterSnapshot.GetTypes(),
    ],
    [
      AWS_ResourceType.NEPTUNE_EVENTSUBSCRIPTION,
      NEPTUNE_EventSubscription.GetTypes(),
    ],
    [AWS_ResourceType.NEPTUNE_GLOBALCLUSTER, NEPTUNE_GlobalCluster.GetTypes()],
    [
      AWS_ResourceType.NEPTUNE_PARAMETERGROUP,
      NEPTUNE_ParameterGroup.GetTypes(),
    ],
    [AWS_ResourceType.NEPTUNE_SUBNETGROUP, NEPTUNE_SubnetGroup.GetTypes()],
    [
      AWS_ResourceType.NETWORKFIREWALL_FIREWALL,
      NETWORKFIREWALL_Firewall.GetTypes(),
    ],
    [
      AWS_ResourceType.NETWORKFIREWALL_FIREWALLPOLICY,
      NETWORKFIREWALL_FirewallPolicy.GetTypes(),
    ],
    [
      AWS_ResourceType.NETWORKFIREWALL_LOGGINGCONFIGURATION,
      NETWORKFIREWALL_LoggingConfiguration.GetTypes(),
    ],
    [
      AWS_ResourceType.NETWORKFIREWALL_RESOURCEPOLICY,
      NETWORKFIREWALL_ResourcePolicy.GetTypes(),
    ],
    [
      AWS_ResourceType.NETWORKFIREWALL_RULEGROUP,
      NETWORKFIREWALL_RuleGroup.GetTypes(),
    ],
    [
      AWS_ResourceType.NETWORKMANAGER_ATTACHMENTACCEPTER,
      NETWORKMANAGER_AttachmentAccepter.GetTypes(),
    ],
    [
      AWS_ResourceType.NETWORKMANAGER_CONNECTATTACHMENT,
      NETWORKMANAGER_ConnectAttachment.GetTypes(),
    ],
    [
      AWS_ResourceType.NETWORKMANAGER_CONNECTION,
      NETWORKMANAGER_Connection.GetTypes(),
    ],
    [
      AWS_ResourceType.NETWORKMANAGER_CONNECTPEER,
      NETWORKMANAGER_ConnectPeer.GetTypes(),
    ],
    [
      AWS_ResourceType.NETWORKMANAGER_CORENETWORK,
      NETWORKMANAGER_CoreNetwork.GetTypes(),
    ],
    [
      AWS_ResourceType.NETWORKMANAGER_CORENETWORKPOLICYATTACHMENT,
      NETWORKMANAGER_CoreNetworkPolicyAttachment.GetTypes(),
    ],
    [
      AWS_ResourceType.NETWORKMANAGER_CUSTOMERGATEWAYASSOCIATION,
      NETWORKMANAGER_CustomerGatewayAssociation.GetTypes(),
    ],
    [AWS_ResourceType.NETWORKMANAGER_DEVICE, NETWORKMANAGER_Device.GetTypes()],
    [
      AWS_ResourceType.NETWORKMANAGER_GLOBALNETWORK,
      NETWORKMANAGER_GlobalNetwork.GetTypes(),
    ],
    [AWS_ResourceType.NETWORKMANAGER_LINK, NETWORKMANAGER_Link.GetTypes()],
    [
      AWS_ResourceType.NETWORKMANAGER_LINKASSOCIATION,
      NETWORKMANAGER_LinkAssociation.GetTypes(),
    ],
    [AWS_ResourceType.NETWORKMANAGER_SITE, NETWORKMANAGER_Site.GetTypes()],
    [
      AWS_ResourceType.NETWORKMANAGER_SITETOSITEVPNATTACHMENT,
      NETWORKMANAGER_SiteToSiteVpnAttachment.GetTypes(),
    ],
    [
      AWS_ResourceType.NETWORKMANAGER_TRANSITGATEWAYCONNECTPEERASSOCIATION,
      NETWORKMANAGER_TransitGatewayConnectPeerAssociation.GetTypes(),
    ],
    [
      AWS_ResourceType.NETWORKMANAGER_TRANSITGATEWAYPEERING,
      NETWORKMANAGER_TransitGatewayPeering.GetTypes(),
    ],
    [
      AWS_ResourceType.NETWORKMANAGER_TRANSITGATEWAYREGISTRATION,
      NETWORKMANAGER_TransitGatewayRegistration.GetTypes(),
    ],
    [
      AWS_ResourceType.NETWORKMANAGER_TRANSITGATEWAYROUTETABLEATTACHMENT,
      NETWORKMANAGER_TransitGatewayRouteTableAttachment.GetTypes(),
    ],
    [
      AWS_ResourceType.NETWORKMANAGER_VPCATTACHMENT,
      NETWORKMANAGER_VpcAttachment.GetTypes(),
    ],
    [AWS_ResourceType.OAM_LINK, OAM_Link.GetTypes()],
    [AWS_ResourceType.OAM_SINK, OAM_Sink.GetTypes()],
    [AWS_ResourceType.OAM_SINKPOLICY, OAM_SinkPolicy.GetTypes()],
    [AWS_ResourceType.OPENSEARCH_DOMAIN, OPENSEARCH_Domain.GetTypes()],
    [
      AWS_ResourceType.OPENSEARCH_DOMAINPOLICY,
      OPENSEARCH_DomainPolicy.GetTypes(),
    ],
    [
      AWS_ResourceType.OPENSEARCH_DOMAINSAMLOPTIONS,
      OPENSEARCH_DomainSamlOptions.GetTypes(),
    ],
    [
      AWS_ResourceType.OPENSEARCH_INBOUNDCONNECTIONACCEPTER,
      OPENSEARCH_InboundConnectionAccepter.GetTypes(),
    ],
    [
      AWS_ResourceType.OPENSEARCH_OUTBOUNDCONNECTION,
      OPENSEARCH_OutboundConnection.GetTypes(),
    ],
    [AWS_ResourceType.OPENSEARCH_PACKAGE, OPENSEARCH_Package.GetTypes()],
    [
      AWS_ResourceType.OPENSEARCH_PACKAGEASSOCIATION,
      OPENSEARCH_PackageAssociation.GetTypes(),
    ],
    [
      AWS_ResourceType.OPENSEARCH_SERVERLESSACCESSPOLICY,
      OPENSEARCH_ServerlessAccessPolicy.GetTypes(),
    ],
    [
      AWS_ResourceType.OPENSEARCH_SERVERLESSCOLLECTION,
      OPENSEARCH_ServerlessCollection.GetTypes(),
    ],
    [
      AWS_ResourceType.OPENSEARCH_SERVERLESSLIFECYCLEPOLICY,
      OPENSEARCH_ServerlessLifecyclePolicy.GetTypes(),
    ],
    [
      AWS_ResourceType.OPENSEARCH_SERVERLESSSECURITYCONFIG,
      OPENSEARCH_ServerlessSecurityConfig.GetTypes(),
    ],
    [
      AWS_ResourceType.OPENSEARCH_SERVERLESSSECURITYPOLICY,
      OPENSEARCH_ServerlessSecurityPolicy.GetTypes(),
    ],
    [
      AWS_ResourceType.OPENSEARCH_SERVERLESSVPCENDPOINT,
      OPENSEARCH_ServerlessVpcEndpoint.GetTypes(),
    ],
    [
      AWS_ResourceType.OPENSEARCH_VPCENDPOINT,
      OPENSEARCH_VpcEndpoint.GetTypes(),
    ],
    [
      AWS_ResourceType.OPENSEARCHINGEST_PIPELINE,
      OPENSEARCHINGEST_Pipeline.GetTypes(),
    ],
    [AWS_ResourceType.OPSWORKS_APPLICATION, OPSWORKS_Application.GetTypes()],
    [AWS_ResourceType.OPSWORKS_CUSTOMLAYER, OPSWORKS_CustomLayer.GetTypes()],
    [
      AWS_ResourceType.OPSWORKS_ECSCLUSTERLAYER,
      OPSWORKS_EcsClusterLayer.GetTypes(),
    ],
    [AWS_ResourceType.OPSWORKS_GANGLIALAYER, OPSWORKS_GangliaLayer.GetTypes()],
    [AWS_ResourceType.OPSWORKS_HAPROXYLAYER, OPSWORKS_HaproxyLayer.GetTypes()],
    [AWS_ResourceType.OPSWORKS_INSTANCE, OPSWORKS_Instance.GetTypes()],
    [AWS_ResourceType.OPSWORKS_JAVAAPPLAYER, OPSWORKS_JavaAppLayer.GetTypes()],
    [
      AWS_ResourceType.OPSWORKS_MEMCACHEDLAYER,
      OPSWORKS_MemcachedLayer.GetTypes(),
    ],
    [AWS_ResourceType.OPSWORKS_MYSQLLAYER, OPSWORKS_MysqlLayer.GetTypes()],
    [
      AWS_ResourceType.OPSWORKS_NODEJSAPPLAYER,
      OPSWORKS_NodejsAppLayer.GetTypes(),
    ],
    [AWS_ResourceType.OPSWORKS_PERMISSION, OPSWORKS_Permission.GetTypes()],
    [AWS_ResourceType.OPSWORKS_PHPAPPLAYER, OPSWORKS_PhpAppLayer.GetTypes()],
    [
      AWS_ResourceType.OPSWORKS_RAILSAPPLAYER,
      OPSWORKS_RailsAppLayer.GetTypes(),
    ],
    [
      AWS_ResourceType.OPSWORKS_RDSDBINSTANCE,
      OPSWORKS_RdsDbInstance.GetTypes(),
    ],
    [AWS_ResourceType.OPSWORKS_STACK, OPSWORKS_Stack.GetTypes()],
    [
      AWS_ResourceType.OPSWORKS_STATICWEBLAYER,
      OPSWORKS_StaticWebLayer.GetTypes(),
    ],
    [AWS_ResourceType.OPSWORKS_USERPROFILE, OPSWORKS_UserProfile.GetTypes()],
    [AWS_ResourceType.ORGANIZATIONS_ACCOUNT, ORGANIZATIONS_Account.GetTypes()],
    [
      AWS_ResourceType.ORGANIZATIONS_DELEGATEDADMINISTRATOR,
      ORGANIZATIONS_DelegatedAdministrator.GetTypes(),
    ],
    [
      AWS_ResourceType.ORGANIZATIONS_ORGANIZATION,
      ORGANIZATIONS_Organization.GetTypes(),
    ],
    [
      AWS_ResourceType.ORGANIZATIONS_ORGANIZATIONALUNIT,
      ORGANIZATIONS_OrganizationalUnit.GetTypes(),
    ],
    [AWS_ResourceType.ORGANIZATIONS_POLICY, ORGANIZATIONS_Policy.GetTypes()],
    [
      AWS_ResourceType.ORGANIZATIONS_POLICYATTACHMENT,
      ORGANIZATIONS_PolicyAttachment.GetTypes(),
    ],
    [
      AWS_ResourceType.ORGANIZATIONS_RESOURCEPOLICY,
      ORGANIZATIONS_ResourcePolicy.GetTypes(),
    ],
    [AWS_ResourceType.PINPOINT_ADMCHANNEL, PINPOINT_AdmChannel.GetTypes()],
    [AWS_ResourceType.PINPOINT_APNSCHANNEL, PINPOINT_ApnsChannel.GetTypes()],
    [
      AWS_ResourceType.PINPOINT_APNSSANDBOXCHANNEL,
      PINPOINT_ApnsSandboxChannel.GetTypes(),
    ],
    [
      AWS_ResourceType.PINPOINT_APNSVOIPCHANNEL,
      PINPOINT_ApnsVoipChannel.GetTypes(),
    ],
    [
      AWS_ResourceType.PINPOINT_APNSVOIPSANDBOXCHANNEL,
      PINPOINT_ApnsVoipSandboxChannel.GetTypes(),
    ],
    [AWS_ResourceType.PINPOINT_APP, PINPOINT_App.GetTypes()],
    [AWS_ResourceType.PINPOINT_BAIDUCHANNEL, PINPOINT_BaiduChannel.GetTypes()],
    [AWS_ResourceType.PINPOINT_EMAILCHANNEL, PINPOINT_EmailChannel.GetTypes()],
    [AWS_ResourceType.PINPOINT_EVENTSTREAM, PINPOINT_EventStream.GetTypes()],
    [AWS_ResourceType.PINPOINT_GCMCHANNEL, PINPOINT_GcmChannel.GetTypes()],
    [AWS_ResourceType.PINPOINT_SMSCHANNEL, PINPOINT_SmsChannel.GetTypes()],
    [AWS_ResourceType.PIPES_PIPE, PIPES_Pipe.GetTypes()],
    [AWS_ResourceType.QLDB_LEDGER, QLDB_Ledger.GetTypes()],
    [AWS_ResourceType.QLDB_STREAM, QLDB_Stream.GetTypes()],
    [
      AWS_ResourceType.QUICKSIGHT_ACCOUNTSUBSCRIPTION,
      QUICKSIGHT_AccountSubscription.GetTypes(),
    ],
    [AWS_ResourceType.QUICKSIGHT_ANALYSIS, QUICKSIGHT_Analysis.GetTypes()],
    [AWS_ResourceType.QUICKSIGHT_DASHBOARD, QUICKSIGHT_Dashboard.GetTypes()],
    [AWS_ResourceType.QUICKSIGHT_DATASET, QUICKSIGHT_DataSet.GetTypes()],
    [AWS_ResourceType.QUICKSIGHT_DATASOURCE, QUICKSIGHT_DataSource.GetTypes()],
    [AWS_ResourceType.QUICKSIGHT_FOLDER, QUICKSIGHT_Folder.GetTypes()],
    [
      AWS_ResourceType.QUICKSIGHT_FOLDERMEMBERSHIP,
      QUICKSIGHT_FolderMembership.GetTypes(),
    ],
    [AWS_ResourceType.QUICKSIGHT_GROUP, QUICKSIGHT_Group.GetTypes()],
    [
      AWS_ResourceType.QUICKSIGHT_GROUPMEMBERSHIP,
      QUICKSIGHT_GroupMembership.GetTypes(),
    ],
    [
      AWS_ResourceType.QUICKSIGHT_IAMPOLICYASSIGNMENT,
      QUICKSIGHT_IamPolicyAssignment.GetTypes(),
    ],
    [AWS_ResourceType.QUICKSIGHT_INGESTION, QUICKSIGHT_Ingestion.GetTypes()],
    [AWS_ResourceType.QUICKSIGHT_NAMESPACE, QUICKSIGHT_Namespace.GetTypes()],
    [
      AWS_ResourceType.QUICKSIGHT_REFRESHSCHEDULE,
      QUICKSIGHT_RefreshSchedule.GetTypes(),
    ],
    [AWS_ResourceType.QUICKSIGHT_TEMPLATE, QUICKSIGHT_Template.GetTypes()],
    [
      AWS_ResourceType.QUICKSIGHT_TEMPLATEALIAS,
      QUICKSIGHT_TemplateAlias.GetTypes(),
    ],
    [AWS_ResourceType.QUICKSIGHT_THEME, QUICKSIGHT_Theme.GetTypes()],
    [AWS_ResourceType.QUICKSIGHT_USER, QUICKSIGHT_User.GetTypes()],
    [
      AWS_ResourceType.QUICKSIGHT_VPCCONNECTION,
      QUICKSIGHT_VpcConnection.GetTypes(),
    ],
    [
      AWS_ResourceType.RAM_PRINCIPALASSOCIATION,
      RAM_PrincipalAssociation.GetTypes(),
    ],
    [
      AWS_ResourceType.RAM_RESOURCEASSOCIATION,
      RAM_ResourceAssociation.GetTypes(),
    ],
    [AWS_ResourceType.RAM_RESOURCESHARE, RAM_ResourceShare.GetTypes()],
    [
      AWS_ResourceType.RAM_RESOURCESHAREACCEPTER,
      RAM_ResourceShareAccepter.GetTypes(),
    ],
    [
      AWS_ResourceType.RAM_SHARINGWITHORGANIZATION,
      RAM_SharingWithOrganization.GetTypes(),
    ],
    [AWS_ResourceType.RBIN_RULE, RBIN_Rule.GetTypes()],
    [AWS_ResourceType.RDS_CLUSTER, RDS_Cluster.GetTypes()],
    [
      AWS_ResourceType.RDS_CLUSTERACTIVITYSTREAM,
      RDS_ClusterActivityStream.GetTypes(),
    ],
    [AWS_ResourceType.RDS_CLUSTERENDPOINT, RDS_ClusterEndpoint.GetTypes()],
    [AWS_ResourceType.RDS_CLUSTERINSTANCE, RDS_ClusterInstance.GetTypes()],
    [
      AWS_ResourceType.RDS_CLUSTERPARAMETERGROUP,
      RDS_ClusterParameterGroup.GetTypes(),
    ],
    [
      AWS_ResourceType.RDS_CLUSTERROLEASSOCIATION,
      RDS_ClusterRoleAssociation.GetTypes(),
    ],
    [AWS_ResourceType.RDS_CLUSTERSNAPSHOT, RDS_ClusterSnapshot.GetTypes()],
    [
      AWS_ResourceType.RDS_CUSTOMDBENGINEVERSION,
      RDS_CustomDbEngineVersion.GetTypes(),
    ],
    [AWS_ResourceType.RDS_EVENTSUBSCRIPTION, RDS_EventSubscription.GetTypes()],
    [AWS_ResourceType.RDS_EXPORTTASK, RDS_ExportTask.GetTypes()],
    [AWS_ResourceType.RDS_GLOBALCLUSTER, RDS_GlobalCluster.GetTypes()],
    [AWS_ResourceType.RDS_INSTANCE, RDS_Instance.GetTypes()],
    [
      AWS_ResourceType.RDS_INSTANCEAUTOMATEDBACKUPSREPLICATION,
      RDS_InstanceAutomatedBackupsReplication.GetTypes(),
    ],
    [AWS_ResourceType.RDS_OPTIONGROUP, RDS_OptionGroup.GetTypes()],
    [AWS_ResourceType.RDS_PARAMETERGROUP, RDS_ParameterGroup.GetTypes()],
    [AWS_ResourceType.RDS_PROXY, RDS_Proxy.GetTypes()],
    [
      AWS_ResourceType.RDS_PROXYDEFAULTTARGETGROUP,
      RDS_ProxyDefaultTargetGroup.GetTypes(),
    ],
    [AWS_ResourceType.RDS_PROXYENDPOINT, RDS_ProxyEndpoint.GetTypes()],
    [AWS_ResourceType.RDS_PROXYTARGET, RDS_ProxyTarget.GetTypes()],
    [AWS_ResourceType.RDS_RESERVEDINSTANCE, RDS_ReservedInstance.GetTypes()],
    [AWS_ResourceType.RDS_ROLEASSOCIATION, RDS_RoleAssociation.GetTypes()],
    [AWS_ResourceType.RDS_SNAPSHOT, RDS_Snapshot.GetTypes()],
    [AWS_ResourceType.RDS_SNAPSHOTCOPY, RDS_SnapshotCopy.GetTypes()],
    [AWS_ResourceType.RDS_SUBNETGROUP, RDS_SubnetGroup.GetTypes()],
    [
      AWS_ResourceType.REDSHIFT_AUTHENTICATIONPROFILE,
      REDSHIFT_AuthenticationProfile.GetTypes(),
    ],
    [AWS_ResourceType.REDSHIFT_CLUSTER, REDSHIFT_Cluster.GetTypes()],
    [
      AWS_ResourceType.REDSHIFT_CLUSTERIAMROLES,
      REDSHIFT_ClusterIamRoles.GetTypes(),
    ],
    [
      AWS_ResourceType.REDSHIFT_CLUSTERSNAPSHOT,
      REDSHIFT_ClusterSnapshot.GetTypes(),
    ],
    [
      AWS_ResourceType.REDSHIFT_DATASHAREAUTHORIZATION,
      REDSHIFT_DataShareAuthorization.GetTypes(),
    ],
    [
      AWS_ResourceType.REDSHIFT_DATASHARECONSUMERASSOCIATION,
      REDSHIFT_DataShareConsumerAssociation.GetTypes(),
    ],
    [
      AWS_ResourceType.REDSHIFT_ENDPOINTACCESS,
      REDSHIFT_EndpointAccess.GetTypes(),
    ],
    [
      AWS_ResourceType.REDSHIFT_ENDPOINTAUTHORIZATION,
      REDSHIFT_EndpointAuthorization.GetTypes(),
    ],
    [
      AWS_ResourceType.REDSHIFT_EVENTSUBSCRIPTION,
      REDSHIFT_EventSubscription.GetTypes(),
    ],
    [
      AWS_ResourceType.REDSHIFT_HSMCLIENTCERTIFICATE,
      REDSHIFT_HsmClientCertificate.GetTypes(),
    ],
    [
      AWS_ResourceType.REDSHIFT_HSMCONFIGURATION,
      REDSHIFT_HsmConfiguration.GetTypes(),
    ],
    [
      AWS_ResourceType.REDSHIFT_PARAMETERGROUP,
      REDSHIFT_ParameterGroup.GetTypes(),
    ],
    [AWS_ResourceType.REDSHIFT_PARTNER, REDSHIFT_Partner.GetTypes()],
    [
      AWS_ResourceType.REDSHIFT_RESOURCEPOLICY,
      REDSHIFT_ResourcePolicy.GetTypes(),
    ],
    [
      AWS_ResourceType.REDSHIFT_SCHEDULEDACTION,
      REDSHIFT_ScheduledAction.GetTypes(),
    ],
    [
      AWS_ResourceType.REDSHIFT_SNAPSHOTCOPYGRANT,
      REDSHIFT_SnapshotCopyGrant.GetTypes(),
    ],
    [
      AWS_ResourceType.REDSHIFT_SNAPSHOTSCHEDULE,
      REDSHIFT_SnapshotSchedule.GetTypes(),
    ],
    [
      AWS_ResourceType.REDSHIFT_SNAPSHOTSCHEDULEASSOCIATION,
      REDSHIFT_SnapshotScheduleAssociation.GetTypes(),
    ],
    [AWS_ResourceType.REDSHIFT_SUBNETGROUP, REDSHIFT_SubnetGroup.GetTypes()],
    [AWS_ResourceType.REDSHIFT_USAGELIMIT, REDSHIFT_UsageLimit.GetTypes()],
  ]);

  public static propertiesMap2 = new Map<AWS_ResourceType, DynamicUIProps[]>([
    [
      AWS_ResourceType.REDSHIFTDATA_STATEMENT,
      REDSHIFTDATA_Statement.GetTypes(),
    ],
    [
      AWS_ResourceType.REDSHIFTSERVERLESS_ENDPOINTACCESS,
      REDSHIFTSERVERLESS_EndpointAccess.GetTypes(),
    ],
    [
      AWS_ResourceType.REDSHIFTSERVERLESS_NAMESPACE,
      REDSHIFTSERVERLESS_Namespace.GetTypes(),
    ],
    [
      AWS_ResourceType.REDSHIFTSERVERLESS_RESOURCEPOLICY,
      REDSHIFTSERVERLESS_ResourcePolicy.GetTypes(),
    ],
    [
      AWS_ResourceType.REDSHIFTSERVERLESS_SNAPSHOT,
      REDSHIFTSERVERLESS_Snapshot.GetTypes(),
    ],
    [
      AWS_ResourceType.REDSHIFTSERVERLESS_USAGELIMIT,
      REDSHIFTSERVERLESS_UsageLimit.GetTypes(),
    ],
    [
      AWS_ResourceType.REDSHIFTSERVERLESS_WORKGROUP,
      REDSHIFTSERVERLESS_Workgroup.GetTypes(),
    ],
    [
      AWS_ResourceType.REKOGNITION_COLLECTION,
      REKOGNITION_Collection.GetTypes(),
    ],
    [AWS_ResourceType.REKOGNITION_PROJECT, REKOGNITION_Project.GetTypes()],
    [
      AWS_ResourceType.RESOURCEEXPLORER_INDEX,
      RESOURCEEXPLORER_Index.GetTypes(),
    ],
    [AWS_ResourceType.RESOURCEEXPLORER_VIEW, RESOURCEEXPLORER_View.GetTypes()],
    [AWS_ResourceType.RESOURCEGROUPS_GROUP, RESOURCEGROUPS_Group.GetTypes()],
    [
      AWS_ResourceType.RESOURCEGROUPS_RESOURCE,
      RESOURCEGROUPS_Resource.GetTypes(),
    ],
    [AWS_ResourceType.ROLESANYWHERE_PROFILE, ROLESANYWHERE_Profile.GetTypes()],
    [
      AWS_ResourceType.ROLESANYWHERE_TRUSTANCHOR,
      ROLESANYWHERE_TrustAnchor.GetTypes(),
    ],
    [
      AWS_ResourceType.ROUTE53_CIDRCOLLECTION,
      ROUTE53_CidrCollection.GetTypes(),
    ],
    [AWS_ResourceType.ROUTE53_CIDRLOCATION, ROUTE53_CidrLocation.GetTypes()],
    [AWS_ResourceType.ROUTE53_DELEGATIONSET, ROUTE53_DelegationSet.GetTypes()],
    [AWS_ResourceType.ROUTE53_HEALTHCHECK, ROUTE53_HealthCheck.GetTypes()],
    [
      AWS_ResourceType.ROUTE53_HOSTEDZONEDNSSEC,
      ROUTE53_HostedZoneDnsSec.GetTypes(),
    ],
    [AWS_ResourceType.ROUTE53_KEYSIGNINGKEY, ROUTE53_KeySigningKey.GetTypes()],
    [AWS_ResourceType.ROUTE53_QUERYLOG, ROUTE53_QueryLog.GetTypes()],
    [AWS_ResourceType.ROUTE53_RECORD, ROUTE53_Record.GetTypes()],
    [
      AWS_ResourceType.ROUTE53_RESOLVERCONFIG,
      ROUTE53_ResolverConfig.GetTypes(),
    ],
    [
      AWS_ResourceType.ROUTE53_RESOLVERDNSSECCONFIG,
      ROUTE53_ResolverDnsSecConfig.GetTypes(),
    ],
    [
      AWS_ResourceType.ROUTE53_RESOLVERENDPOINT,
      ROUTE53_ResolverEndpoint.GetTypes(),
    ],
    [
      AWS_ResourceType.ROUTE53_RESOLVERFIREWALLCONFIG,
      ROUTE53_ResolverFirewallConfig.GetTypes(),
    ],
    [
      AWS_ResourceType.ROUTE53_RESOLVERFIREWALLDOMAINLIST,
      ROUTE53_ResolverFirewallDomainList.GetTypes(),
    ],
    [
      AWS_ResourceType.ROUTE53_RESOLVERFIREWALLRULE,
      ROUTE53_ResolverFirewallRule.GetTypes(),
    ],
    [
      AWS_ResourceType.ROUTE53_RESOLVERFIREWALLRULEGROUP,
      ROUTE53_ResolverFirewallRuleGroup.GetTypes(),
    ],
    [
      AWS_ResourceType.ROUTE53_RESOLVERFIREWALLRULEGROUPASSOCIATION,
      ROUTE53_ResolverFirewallRuleGroupAssociation.GetTypes(),
    ],
    [
      AWS_ResourceType.ROUTE53_RESOLVERQUERYLOGCONFIG,
      ROUTE53_ResolverQueryLogConfig.GetTypes(),
    ],
    [
      AWS_ResourceType.ROUTE53_RESOLVERQUERYLOGCONFIGASSOCIATION,
      ROUTE53_ResolverQueryLogConfigAssociation.GetTypes(),
    ],
    [AWS_ResourceType.ROUTE53_RESOLVERRULE, ROUTE53_ResolverRule.GetTypes()],
    [
      AWS_ResourceType.ROUTE53_RESOLVERRULEASSOCIATION,
      ROUTE53_ResolverRuleAssociation.GetTypes(),
    ],
    [AWS_ResourceType.ROUTE53_TRAFFICPOLICY, ROUTE53_TrafficPolicy.GetTypes()],
    [
      AWS_ResourceType.ROUTE53_TRAFFICPOLICYINSTANCE,
      ROUTE53_TrafficPolicyInstance.GetTypes(),
    ],
    [
      AWS_ResourceType.ROUTE53_VPCASSOCIATIONAUTHORIZATION,
      ROUTE53_VpcAssociationAuthorization.GetTypes(),
    ],
    [AWS_ResourceType.ROUTE53_ZONE, ROUTE53_Zone.GetTypes()],
    [
      AWS_ResourceType.ROUTE53_ZONEASSOCIATION,
      ROUTE53_ZoneAssociation.GetTypes(),
    ],
    [
      AWS_ResourceType.ROUTE53DOMAINS_DELEGATIONSIGNERRECORD,
      ROUTE53DOMAINS_DelegationSignerRecord.GetTypes(),
    ],
    [
      AWS_ResourceType.ROUTE53DOMAINS_REGISTEREDDOMAIN,
      ROUTE53DOMAINS_RegisteredDomain.GetTypes(),
    ],
    [
      AWS_ResourceType.ROUTE53RECOVERYCONTROL_CLUSTER,
      ROUTE53RECOVERYCONTROL_Cluster.GetTypes(),
    ],
    [
      AWS_ResourceType.ROUTE53RECOVERYCONTROL_CONTROLPANEL,
      ROUTE53RECOVERYCONTROL_ControlPanel.GetTypes(),
    ],
    [
      AWS_ResourceType.ROUTE53RECOVERYCONTROL_ROUTINGCONTROL,
      ROUTE53RECOVERYCONTROL_RoutingControl.GetTypes(),
    ],
    [
      AWS_ResourceType.ROUTE53RECOVERYCONTROL_SAFETYRULE,
      ROUTE53RECOVERYCONTROL_SafetyRule.GetTypes(),
    ],
    [
      AWS_ResourceType.ROUTE53RECOVERYREADINESS_CELL,
      ROUTE53RECOVERYREADINESS_Cell.GetTypes(),
    ],
    [
      AWS_ResourceType.ROUTE53RECOVERYREADINESS_READINESSCHECK,
      ROUTE53RECOVERYREADINESS_ReadinessCheck.GetTypes(),
    ],
    [
      AWS_ResourceType.ROUTE53RECOVERYREADINESS_RECOVERYGROUP,
      ROUTE53RECOVERYREADINESS_RecoveryGroup.GetTypes(),
    ],
    [
      AWS_ResourceType.ROUTE53RECOVERYREADINESS_RESOURCESET,
      ROUTE53RECOVERYREADINESS_ResourceSet.GetTypes(),
    ],
    [AWS_ResourceType.RUM_APPMONITOR, RUM_AppMonitor.GetTypes()],
    [
      AWS_ResourceType.RUM_METRICSDESTINATION,
      RUM_MetricsDestination.GetTypes(),
    ],
    [AWS_ResourceType.S3_ACCESSPOINT, S3_AccessPoint.GetTypes()],
    [
      AWS_ResourceType.S3_ACCOUNTPUBLICACCESSBLOCK,
      S3_AccountPublicAccessBlock.GetTypes(),
    ],
    [
      AWS_ResourceType.S3_ANALYTICSCONFIGURATION,
      S3_AnalyticsConfiguration.GetTypes(),
    ],
    [AWS_ResourceType.S3_BUCKET, S3_Bucket.GetTypes()],
    [
      AWS_ResourceType.S3_BUCKETACCELERATECONFIGURATIONV2,
      S3_BucketAccelerateConfigurationV2.GetTypes(),
    ],
    [AWS_ResourceType.S3_BUCKETACLV2, S3_BucketAclV2.GetTypes()],
    [
      AWS_ResourceType.S3_BUCKETCORSCONFIGURATIONV2,
      S3_BucketCorsConfigurationV2.GetTypes(),
    ],
    [
      AWS_ResourceType.S3_BUCKETINTELLIGENTTIERINGCONFIGURATION,
      S3_BucketIntelligentTieringConfiguration.GetTypes(),
    ],
    [
      AWS_ResourceType.S3_BUCKETLIFECYCLECONFIGURATIONV2,
      S3_BucketLifecycleConfigurationV2.GetTypes(),
    ],
    [AWS_ResourceType.S3_BUCKETLOGGINGV2, S3_BucketLoggingV2.GetTypes()],
    [AWS_ResourceType.S3_BUCKETMETRIC, S3_BucketMetric.GetTypes()],
    [AWS_ResourceType.S3_BUCKETNOTIFICATION, S3_BucketNotification.GetTypes()],
    [AWS_ResourceType.S3_BUCKETOBJECT, S3_BucketObject.GetTypes()],
    [
      AWS_ResourceType.S3_BUCKETOBJECTLOCKCONFIGURATIONV2,
      S3_BucketObjectLockConfigurationV2.GetTypes(),
    ],
    [AWS_ResourceType.S3_BUCKETOBJECTV2, S3_BucketObjectv2.GetTypes()],
    [
      AWS_ResourceType.S3_BUCKETOWNERSHIPCONTROLS,
      S3_BucketOwnershipControls.GetTypes(),
    ],
    [AWS_ResourceType.S3_BUCKETPOLICY, S3_BucketPolicy.GetTypes()],
    [
      AWS_ResourceType.S3_BUCKETPUBLICACCESSBLOCK,
      S3_BucketPublicAccessBlock.GetTypes(),
    ],
    [
      AWS_ResourceType.S3_BUCKETREPLICATIONCONFIG,
      S3_BucketReplicationConfig.GetTypes(),
    ],
    [
      AWS_ResourceType.S3_BUCKETREQUESTPAYMENTCONFIGURATIONV2,
      S3_BucketRequestPaymentConfigurationV2.GetTypes(),
    ],
    [
      AWS_ResourceType.S3_BUCKETSERVERSIDEENCRYPTIONCONFIGURATIONV2,
      S3_BucketServerSideEncryptionConfigurationV2.GetTypes(),
    ],
    [AWS_ResourceType.S3_BUCKETV2, S3_BucketV2.GetTypes()],
    [AWS_ResourceType.S3_BUCKETVERSIONINGV2, S3_BucketVersioningV2.GetTypes()],
    [
      AWS_ResourceType.S3_BUCKETWEBSITECONFIGURATIONV2,
      S3_BucketWebsiteConfigurationV2.GetTypes(),
    ],
    [AWS_ResourceType.S3_DIRECTORYBUCKET, S3_DirectoryBucket.GetTypes()],
    [AWS_ResourceType.S3_INVENTORY, S3_Inventory.GetTypes()],
    [AWS_ResourceType.S3_OBJECTCOPY, S3_ObjectCopy.GetTypes()],
    [AWS_ResourceType.S3CONTROL_ACCESSGRANT, S3CONTROL_AccessGrant.GetTypes()],
    [
      AWS_ResourceType.S3CONTROL_ACCESSGRANTSINSTANCE,
      S3CONTROL_AccessGrantsInstance.GetTypes(),
    ],
    [
      AWS_ResourceType.S3CONTROL_ACCESSGRANTSINSTANCERESOURCEPOLICY,
      S3CONTROL_AccessGrantsInstanceResourcePolicy.GetTypes(),
    ],
    [
      AWS_ResourceType.S3CONTROL_ACCESSGRANTSLOCATION,
      S3CONTROL_AccessGrantsLocation.GetTypes(),
    ],
    [
      AWS_ResourceType.S3CONTROL_ACCESSPOINTPOLICY,
      S3CONTROL_AccessPointPolicy.GetTypes(),
    ],
    [AWS_ResourceType.S3CONTROL_BUCKET, S3CONTROL_Bucket.GetTypes()],
    [
      AWS_ResourceType.S3CONTROL_BUCKETLIFECYCLECONFIGURATION,
      S3CONTROL_BucketLifecycleConfiguration.GetTypes(),
    ],
    [
      AWS_ResourceType.S3CONTROL_BUCKETPOLICY,
      S3CONTROL_BucketPolicy.GetTypes(),
    ],
    [
      AWS_ResourceType.S3CONTROL_MULTIREGIONACCESSPOINT,
      S3CONTROL_MultiRegionAccessPoint.GetTypes(),
    ],
    [
      AWS_ResourceType.S3CONTROL_MULTIREGIONACCESSPOINTPOLICY,
      S3CONTROL_MultiRegionAccessPointPolicy.GetTypes(),
    ],
    [
      AWS_ResourceType.S3CONTROL_OBJECTLAMBDAACCESSPOINT,
      S3CONTROL_ObjectLambdaAccessPoint.GetTypes(),
    ],
    [
      AWS_ResourceType.S3CONTROL_OBJECTLAMBDAACCESSPOINTPOLICY,
      S3CONTROL_ObjectLambdaAccessPointPolicy.GetTypes(),
    ],
    [
      AWS_ResourceType.S3CONTROL_STORAGELENSCONFIGURATION,
      S3CONTROL_StorageLensConfiguration.GetTypes(),
    ],
    [AWS_ResourceType.S3OUTPOSTS_ENDPOINT, S3OUTPOSTS_Endpoint.GetTypes()],
    [AWS_ResourceType.SAGEMAKER_APP, SAGEMAKER_App.GetTypes()],
    [
      AWS_ResourceType.SAGEMAKER_APPIMAGECONFIG,
      SAGEMAKER_AppImageConfig.GetTypes(),
    ],
    [
      AWS_ResourceType.SAGEMAKER_CODEREPOSITORY,
      SAGEMAKER_CodeRepository.GetTypes(),
    ],
    [
      AWS_ResourceType.SAGEMAKER_DATAQUALITYJOBDEFINITION,
      SAGEMAKER_DataQualityJobDefinition.GetTypes(),
    ],
    [AWS_ResourceType.SAGEMAKER_DEVICE, SAGEMAKER_Device.GetTypes()],
    [AWS_ResourceType.SAGEMAKER_DEVICEFLEET, SAGEMAKER_DeviceFleet.GetTypes()],
    [AWS_ResourceType.SAGEMAKER_DOMAIN, SAGEMAKER_Domain.GetTypes()],
    [AWS_ResourceType.SAGEMAKER_ENDPOINT, SAGEMAKER_Endpoint.GetTypes()],
    [
      AWS_ResourceType.SAGEMAKER_ENDPOINTCONFIGURATION,
      SAGEMAKER_EndpointConfiguration.GetTypes(),
    ],
    [
      AWS_ResourceType.SAGEMAKER_FEATUREGROUP,
      SAGEMAKER_FeatureGroup.GetTypes(),
    ],
    [
      AWS_ResourceType.SAGEMAKER_FLOWDEFINITION,
      SAGEMAKER_FlowDefinition.GetTypes(),
    ],
    [AWS_ResourceType.SAGEMAKER_HUMANTASKUI, SAGEMAKER_HumanTaskUI.GetTypes()],
    [AWS_ResourceType.SAGEMAKER_IMAGE, SAGEMAKER_Image.GetTypes()],
    [
      AWS_ResourceType.SAGEMAKER_IMAGEVERSION,
      SAGEMAKER_ImageVersion.GetTypes(),
    ],
    [AWS_ResourceType.SAGEMAKER_MODEL, SAGEMAKER_Model.GetTypes()],
    [
      AWS_ResourceType.SAGEMAKER_MODELPACKAGEGROUP,
      SAGEMAKER_ModelPackageGroup.GetTypes(),
    ],
    [
      AWS_ResourceType.SAGEMAKER_MODELPACKAGEGROUPPOLICY,
      SAGEMAKER_ModelPackageGroupPolicy.GetTypes(),
    ],
    [
      AWS_ResourceType.SAGEMAKER_MONITORINGSCHEDULE,
      SAGEMAKER_MonitoringSchedule.GetTypes(),
    ],
    [
      AWS_ResourceType.SAGEMAKER_NOTEBOOKINSTANCE,
      SAGEMAKER_NotebookInstance.GetTypes(),
    ],
    [
      AWS_ResourceType.SAGEMAKER_NOTEBOOKINSTANCELIFECYCLECONFIGURATION,
      SAGEMAKER_NotebookInstanceLifecycleConfiguration.GetTypes(),
    ],
    [AWS_ResourceType.SAGEMAKER_PIPELINE, SAGEMAKER_Pipeline.GetTypes()],
    [AWS_ResourceType.SAGEMAKER_PROJECT, SAGEMAKER_Project.GetTypes()],
    [
      AWS_ResourceType.SAGEMAKER_SERVICECATALOGPORTFOLIOSTATUS,
      SAGEMAKER_ServicecatalogPortfolioStatus.GetTypes(),
    ],
    [AWS_ResourceType.SAGEMAKER_SPACE, SAGEMAKER_Space.GetTypes()],
    [
      AWS_ResourceType.SAGEMAKER_STUDIOLIFECYCLECONFIG,
      SAGEMAKER_StudioLifecycleConfig.GetTypes(),
    ],
    [AWS_ResourceType.SAGEMAKER_USERPROFILE, SAGEMAKER_UserProfile.GetTypes()],
    [AWS_ResourceType.SAGEMAKER_WORKFORCE, SAGEMAKER_Workforce.GetTypes()],
    [AWS_ResourceType.SAGEMAKER_WORKTEAM, SAGEMAKER_Workteam.GetTypes()],
    [AWS_ResourceType.SCHEDULER_SCHEDULE, SCHEDULER_Schedule.GetTypes()],
    [
      AWS_ResourceType.SCHEDULER_SCHEDULEGROUP,
      SCHEDULER_ScheduleGroup.GetTypes(),
    ],
    [AWS_ResourceType.SCHEMAS_DISCOVERER, SCHEMAS_Discoverer.GetTypes()],
    [AWS_ResourceType.SCHEMAS_REGISTRY, SCHEMAS_Registry.GetTypes()],
    [
      AWS_ResourceType.SCHEMAS_REGISTRYPOLICY,
      SCHEMAS_RegistryPolicy.GetTypes(),
    ],
    [AWS_ResourceType.SCHEMAS_SCHEMA, SCHEMAS_Schema.GetTypes()],
    [AWS_ResourceType.SECRETSMANAGER_SECRET, SECRETSMANAGER_Secret.GetTypes()],
    [
      AWS_ResourceType.SECRETSMANAGER_SECRETPOLICY,
      SECRETSMANAGER_SecretPolicy.GetTypes(),
    ],
    [
      AWS_ResourceType.SECRETSMANAGER_SECRETROTATION,
      SECRETSMANAGER_SecretRotation.GetTypes(),
    ],
    [
      AWS_ResourceType.SECRETSMANAGER_SECRETVERSION,
      SECRETSMANAGER_SecretVersion.GetTypes(),
    ],
    [AWS_ResourceType.SECURITYHUB_ACCOUNT, SECURITYHUB_Account.GetTypes()],
    [
      AWS_ResourceType.SECURITYHUB_ACTIONTARGET,
      SECURITYHUB_ActionTarget.GetTypes(),
    ],
    [
      AWS_ResourceType.SECURITYHUB_AUTOMATIONRULE,
      SECURITYHUB_AutomationRule.GetTypes(),
    ],
    [
      AWS_ResourceType.SECURITYHUB_FINDINGAGGREGATOR,
      SECURITYHUB_FindingAggregator.GetTypes(),
    ],
    [AWS_ResourceType.SECURITYHUB_INSIGHT, SECURITYHUB_Insight.GetTypes()],
    [
      AWS_ResourceType.SECURITYHUB_INVITEACCEPTER,
      SECURITYHUB_InviteAccepter.GetTypes(),
    ],
    [AWS_ResourceType.SECURITYHUB_MEMBER, SECURITYHUB_Member.GetTypes()],
    [
      AWS_ResourceType.SECURITYHUB_ORGANIZATIONADMINACCOUNT,
      SECURITYHUB_OrganizationAdminAccount.GetTypes(),
    ],
    [
      AWS_ResourceType.SECURITYHUB_ORGANIZATIONCONFIGURATION,
      SECURITYHUB_OrganizationConfiguration.GetTypes(),
    ],
    [
      AWS_ResourceType.SECURITYHUB_PRODUCTSUBSCRIPTION,
      SECURITYHUB_ProductSubscription.GetTypes(),
    ],
    [
      AWS_ResourceType.SECURITYHUB_STANDARDSCONTROL,
      SECURITYHUB_StandardsControl.GetTypes(),
    ],
    [
      AWS_ResourceType.SECURITYHUB_STANDARDSSUBSCRIPTION,
      SECURITYHUB_StandardsSubscription.GetTypes(),
    ],
    [
      AWS_ResourceType.SECURITYLAKE_AWSLOGSOURCE,
      SECURITYLAKE_AwsLogSource.GetTypes(),
    ],
    [
      AWS_ResourceType.SECURITYLAKE_CUSTOMLOGSOURCE,
      SECURITYLAKE_CustomLogSource.GetTypes(),
    ],
    [AWS_ResourceType.SECURITYLAKE_DATALAKE, SECURITYLAKE_DataLake.GetTypes()],
    [
      AWS_ResourceType.SERVERLESSREPOSITORY_CLOUDFORMATIONSTACK,
      SERVERLESSREPOSITORY_CloudFormationStack.GetTypes(),
    ],
    [
      AWS_ResourceType.SERVICECATALOG_BUDGETRESOURCEASSOCIATION,
      SERVICECATALOG_BudgetResourceAssociation.GetTypes(),
    ],
    [
      AWS_ResourceType.SERVICECATALOG_CONSTRAINT,
      SERVICECATALOG_Constraint.GetTypes(),
    ],
    [
      AWS_ResourceType.SERVICECATALOG_ORGANIZATIONSACCESS,
      SERVICECATALOG_OrganizationsAccess.GetTypes(),
    ],
    [
      AWS_ResourceType.SERVICECATALOG_PORTFOLIO,
      SERVICECATALOG_Portfolio.GetTypes(),
    ],
    [
      AWS_ResourceType.SERVICECATALOG_PORTFOLIOSHARE,
      SERVICECATALOG_PortfolioShare.GetTypes(),
    ],
    [
      AWS_ResourceType.SERVICECATALOG_PRINCIPALPORTFOLIOASSOCIATION,
      SERVICECATALOG_PrincipalPortfolioAssociation.GetTypes(),
    ],
    [
      AWS_ResourceType.SERVICECATALOG_PRODUCT,
      SERVICECATALOG_Product.GetTypes(),
    ],
    [
      AWS_ResourceType.SERVICECATALOG_PRODUCTPORTFOLIOASSOCIATION,
      SERVICECATALOG_ProductPortfolioAssociation.GetTypes(),
    ],
    [
      AWS_ResourceType.SERVICECATALOG_PROVISIONEDPRODUCT,
      SERVICECATALOG_ProvisionedProduct.GetTypes(),
    ],
    [
      AWS_ResourceType.SERVICECATALOG_PROVISIONINGARTIFACT,
      SERVICECATALOG_ProvisioningArtifact.GetTypes(),
    ],
    [
      AWS_ResourceType.SERVICECATALOG_SERVICEACTION,
      SERVICECATALOG_ServiceAction.GetTypes(),
    ],
    [
      AWS_ResourceType.SERVICECATALOG_TAGOPTION,
      SERVICECATALOG_TagOption.GetTypes(),
    ],
    [
      AWS_ResourceType.SERVICECATALOG_TAGOPTIONRESOURCEASSOCIATION,
      SERVICECATALOG_TagOptionResourceAssociation.GetTypes(),
    ],
    [
      AWS_ResourceType.SERVICEDISCOVERY_HTTPNAMESPACE,
      SERVICEDISCOVERY_HttpNamespace.GetTypes(),
    ],
    [
      AWS_ResourceType.SERVICEDISCOVERY_INSTANCE,
      SERVICEDISCOVERY_Instance.GetTypes(),
    ],
    [
      AWS_ResourceType.SERVICEDISCOVERY_PRIVATEDNSNAMESPACE,
      SERVICEDISCOVERY_PrivateDnsNamespace.GetTypes(),
    ],
    [
      AWS_ResourceType.SERVICEDISCOVERY_PUBLICDNSNAMESPACE,
      SERVICEDISCOVERY_PublicDnsNamespace.GetTypes(),
    ],
    [
      AWS_ResourceType.SERVICEDISCOVERY_SERVICE,
      SERVICEDISCOVERY_Service.GetTypes(),
    ],
    [
      AWS_ResourceType.SERVICEQUOTAS_SERVICEQUOTA,
      SERVICEQUOTAS_ServiceQuota.GetTypes(),
    ],
    [
      AWS_ResourceType.SERVICEQUOTAS_TEMPLATE,
      SERVICEQUOTAS_Template.GetTypes(),
    ],
    [
      AWS_ResourceType.SERVICEQUOTAS_TEMPLATEASSOCIATION,
      SERVICEQUOTAS_TemplateAssociation.GetTypes(),
    ],
    [
      AWS_ResourceType.SES_ACTIVERECEIPTRULESET,
      SES_ActiveReceiptRuleSet.GetTypes(),
    ],
    [AWS_ResourceType.SES_CONFIGURATIONSET, SES_ConfigurationSet.GetTypes()],
    [AWS_ResourceType.SES_DOMAINDKIM, SES_DomainDkim.GetTypes()],
    [AWS_ResourceType.SES_DOMAINIDENTITY, SES_DomainIdentity.GetTypes()],
    [
      AWS_ResourceType.SES_DOMAINIDENTITYVERIFICATION,
      SES_DomainIdentityVerification.GetTypes(),
    ],
    [AWS_ResourceType.SES_EMAILIDENTITY, SES_EmailIdentity.GetTypes()],
    [AWS_ResourceType.SES_EVENTDESTINATION, SES_EventDestination.GetTypes()],
    [
      AWS_ResourceType.SES_IDENTITYNOTIFICATIONTOPIC,
      SES_IdentityNotificationTopic.GetTypes(),
    ],
    [AWS_ResourceType.SES_IDENTITYPOLICY, SES_IdentityPolicy.GetTypes()],
    [AWS_ResourceType.SES_MAILFROM, SES_MailFrom.GetTypes()],
    [AWS_ResourceType.SES_RECEIPTFILTER, SES_ReceiptFilter.GetTypes()],
    [AWS_ResourceType.SES_RECEIPTRULE, SES_ReceiptRule.GetTypes()],
    [AWS_ResourceType.SES_RECEIPTRULESET, SES_ReceiptRuleSet.GetTypes()],
    [AWS_ResourceType.SES_TEMPLATE, SES_Template.GetTypes()],
    [
      AWS_ResourceType.SESV2_ACCOUNTVDMATTRIBUTES,
      SESV2_AccountVdmAttributes.GetTypes(),
    ],
    [
      AWS_ResourceType.SESV2_CONFIGURATIONSET,
      SESV2_ConfigurationSet.GetTypes(),
    ],
    [
      AWS_ResourceType.SESV2_CONFIGURATIONSETEVENTDESTINATION,
      SESV2_ConfigurationSetEventDestination.GetTypes(),
    ],
    [AWS_ResourceType.SESV2_CONTACTLIST, SESV2_ContactList.GetTypes()],
    [
      AWS_ResourceType.SESV2_DEDICATEDIPASSIGNMENT,
      SESV2_DedicatedIpAssignment.GetTypes(),
    ],
    [AWS_ResourceType.SESV2_DEDICATEDIPPOOL, SESV2_DedicatedIpPool.GetTypes()],
    [AWS_ResourceType.SESV2_EMAILIDENTITY, SESV2_EmailIdentity.GetTypes()],
    [
      AWS_ResourceType.SESV2_EMAILIDENTITYFEEDBACKATTRIBUTES,
      SESV2_EmailIdentityFeedbackAttributes.GetTypes(),
    ],
    [
      AWS_ResourceType.SESV2_EMAILIDENTITYMAILFROMATTRIBUTES,
      SESV2_EmailIdentityMailFromAttributes.GetTypes(),
    ],
    [
      AWS_ResourceType.SESV2_EMAILIDENTITYPOLICY,
      SESV2_EmailIdentityPolicy.GetTypes(),
    ],
    [AWS_ResourceType.SFN_ACTIVITY, SFN_Activity.GetTypes()],
    [AWS_ResourceType.SFN_ALIAS, SFN_Alias.GetTypes()],
    [AWS_ResourceType.SFN_STATEMACHINE, SFN_StateMachine.GetTypes()],
    [
      AWS_ResourceType.SHIELD_APPLICATIONLAYERAUTOMATICRESPONSE,
      SHIELD_ApplicationLayerAutomaticResponse.GetTypes(),
    ],
    [
      AWS_ResourceType.SHIELD_DRTACCESSLOGBUCKETASSOCIATION,
      SHIELD_DrtAccessLogBucketAssociation.GetTypes(),
    ],
    [
      AWS_ResourceType.SHIELD_DRTACCESSROLEARNASSOCIATION,
      SHIELD_DrtAccessRoleArnAssociation.GetTypes(),
    ],
    [
      AWS_ResourceType.SHIELD_PROACTIVEENGAGEMENT,
      SHIELD_ProactiveEngagement.GetTypes(),
    ],
    [AWS_ResourceType.SHIELD_PROTECTION, SHIELD_Protection.GetTypes()],
    [
      AWS_ResourceType.SHIELD_PROTECTIONGROUP,
      SHIELD_ProtectionGroup.GetTypes(),
    ],
    [
      AWS_ResourceType.SHIELD_PROTECTIONHEALTHCHECKASSOCIATION,
      SHIELD_ProtectionHealthCheckAssociation.GetTypes(),
    ],
    [AWS_ResourceType.SIGNER_SIGNINGJOB, SIGNER_SigningJob.GetTypes()],
    [AWS_ResourceType.SIGNER_SIGNINGPROFILE, SIGNER_SigningProfile.GetTypes()],
    [
      AWS_ResourceType.SIGNER_SIGNINGPROFILEPERMISSION,
      SIGNER_SigningProfilePermission.GetTypes(),
    ],
    [AWS_ResourceType.SIMPLEDB_DOMAIN, SIMPLEDB_Domain.GetTypes()],
    [
      AWS_ResourceType.SNS_DATAPROTECTIONPOLICY,
      SNS_DataProtectionPolicy.GetTypes(),
    ],
    [
      AWS_ResourceType.SNS_PLATFORMAPPLICATION,
      SNS_PlatformApplication.GetTypes(),
    ],
    [AWS_ResourceType.SNS_SMSPREFERENCES, SNS_SmsPreferences.GetTypes()],
    [AWS_ResourceType.SNS_TOPIC, SNS_Topic.GetTypes()],
    [AWS_ResourceType.SNS_TOPICPOLICY, SNS_TopicPolicy.GetTypes()],
    [AWS_ResourceType.SNS_TOPICSUBSCRIPTION, SNS_TopicSubscription.GetTypes()],
    [AWS_ResourceType.SQS_QUEUE, SQS_Queue.GetTypes()],
    [AWS_ResourceType.SQS_QUEUEPOLICY, SQS_QueuePolicy.GetTypes()],
    [
      AWS_ResourceType.SQS_REDRIVEALLOWPOLICY,
      SQS_RedriveAllowPolicy.GetTypes(),
    ],
    [AWS_ResourceType.SQS_REDRIVEPOLICY, SQS_RedrivePolicy.GetTypes()],
    [AWS_ResourceType.SSM_ACTIVATION, SSM_Activation.GetTypes()],
    [AWS_ResourceType.SSM_ASSOCIATION, SSM_Association.GetTypes()],
    [AWS_ResourceType.SSM_CONTACTSROTATION, SSM_ContactsRotation.GetTypes()],
    [
      AWS_ResourceType.SSM_DEFAULTPATCHBASELINE,
      SSM_DefaultPatchBaseline.GetTypes(),
    ],
    [AWS_ResourceType.SSM_DOCUMENT, SSM_Document.GetTypes()],
    [AWS_ResourceType.SSM_MAINTENANCEWINDOW, SSM_MaintenanceWindow.GetTypes()],
    [
      AWS_ResourceType.SSM_MAINTENANCEWINDOWTARGET,
      SSM_MaintenanceWindowTarget.GetTypes(),
    ],
    [
      AWS_ResourceType.SSM_MAINTENANCEWINDOWTASK,
      SSM_MaintenanceWindowTask.GetTypes(),
    ],
    [AWS_ResourceType.SSM_PARAMETER, SSM_Parameter.GetTypes()],
    [AWS_ResourceType.SSM_PATCHBASELINE, SSM_PatchBaseline.GetTypes()],
    [AWS_ResourceType.SSM_PATCHGROUP, SSM_PatchGroup.GetTypes()],
    [AWS_ResourceType.SSM_RESOURCEDATASYNC, SSM_ResourceDataSync.GetTypes()],
    [AWS_ResourceType.SSM_SERVICESETTING, SSM_ServiceSetting.GetTypes()],
    [AWS_ResourceType.SSMCONTACTS_CONTACT, SSMCONTACTS_Contact.GetTypes()],
    [
      AWS_ResourceType.SSMCONTACTS_CONTACTCHANNEL,
      SSMCONTACTS_ContactChannel.GetTypes(),
    ],
    [AWS_ResourceType.SSMCONTACTS_PLAN, SSMCONTACTS_Plan.GetTypes()],
    [
      AWS_ResourceType.SSMINCIDENTS_REPLICATIONSET,
      SSMINCIDENTS_ReplicationSet.GetTypes(),
    ],
    [
      AWS_ResourceType.SSMINCIDENTS_RESPONSEPLAN,
      SSMINCIDENTS_ResponsePlan.GetTypes(),
    ],
    [
      AWS_ResourceType.SSOADMIN_ACCOUNTASSIGNMENT,
      SSOADMIN_AccountAssignment.GetTypes(),
    ],
    [AWS_ResourceType.SSOADMIN_APPLICATION, SSOADMIN_Application.GetTypes()],
    [
      AWS_ResourceType.SSOADMIN_APPLICATIONACCESSSCOPE,
      SSOADMIN_ApplicationAccessScope.GetTypes(),
    ],
    [
      AWS_ResourceType.SSOADMIN_APPLICATIONASSIGNMENT,
      SSOADMIN_ApplicationAssignment.GetTypes(),
    ],
    [
      AWS_ResourceType.SSOADMIN_APPLICATIONASSIGNMENTCONFIGURATION,
      SSOADMIN_ApplicationAssignmentConfiguration.GetTypes(),
    ],
    [
      AWS_ResourceType.SSOADMIN_CUSTOMERMANAGEDPOLICYATTACHMENT,
      SSOADMIN_CustomerManagedPolicyAttachment.GetTypes(),
    ],
    [
      AWS_ResourceType.SSOADMIN_INSTANCEACCESSCONTROLATTRIBUTES,
      SSOADMIN_InstanceAccessControlAttributes.GetTypes(),
    ],
    [
      AWS_ResourceType.SSOADMIN_MANAGEDPOLICYATTACHMENT,
      SSOADMIN_ManagedPolicyAttachment.GetTypes(),
    ],
    [
      AWS_ResourceType.SSOADMIN_PERMISSIONSBOUNDARYATTACHMENT,
      SSOADMIN_PermissionsBoundaryAttachment.GetTypes(),
    ],
    [
      AWS_ResourceType.SSOADMIN_PERMISSIONSET,
      SSOADMIN_PermissionSet.GetTypes(),
    ],
    [
      AWS_ResourceType.SSOADMIN_PERMISSIONSETINLINEPOLICY,
      SSOADMIN_PermissionSetInlinePolicy.GetTypes(),
    ],
    [
      AWS_ResourceType.SSOADMIN_TRUSTEDTOKENISSUER,
      SSOADMIN_TrustedTokenIssuer.GetTypes(),
    ],
    [AWS_ResourceType.STORAGEGATEWAY_CACHE, STORAGEGATEWAY_Cache.GetTypes()],
    [
      AWS_ResourceType.STORAGEGATEWAY_CACHESISCSIVOLUME,
      STORAGEGATEWAY_CachesIscsiVolume.GetTypes(),
    ],
    [
      AWS_ResourceType.STORAGEGATEWAY_FILESYSTEMASSOCIATION,
      STORAGEGATEWAY_FileSystemAssociation.GetTypes(),
    ],
    [
      AWS_ResourceType.STORAGEGATEWAY_GATEWAY,
      STORAGEGATEWAY_Gateway.GetTypes(),
    ],
    [
      AWS_ResourceType.STORAGEGATEWAY_NFSFILESHARE,
      STORAGEGATEWAY_NfsFileShare.GetTypes(),
    ],
    [
      AWS_ResourceType.STORAGEGATEWAY_SMBFILESHARE,
      STORAGEGATEWAY_SmbFileShare.GetTypes(),
    ],
    [
      AWS_ResourceType.STORAGEGATEWAY_STOREDISCSIVOLUME,
      STORAGEGATEWAY_StoredIscsiVolume.GetTypes(),
    ],
    [
      AWS_ResourceType.STORAGEGATEWAY_TAPEPOOL,
      STORAGEGATEWAY_TapePool.GetTypes(),
    ],
    [
      AWS_ResourceType.STORAGEGATEWAY_UPLOADBUFFER,
      STORAGEGATEWAY_UploadBuffer.GetTypes(),
    ],
    [
      AWS_ResourceType.STORAGEGATEWAY_WORKINGSTORAGE,
      STORAGEGATEWAY_WorkingStorage.GetTypes(),
    ],
    [AWS_ResourceType.SWF_DOMAIN, SWF_Domain.GetTypes()],
    [AWS_ResourceType.SYNTHETICS_CANARY, SYNTHETICS_Canary.GetTypes()],
    [AWS_ResourceType.SYNTHETICS_GROUP, SYNTHETICS_Group.GetTypes()],
    [
      AWS_ResourceType.SYNTHETICS_GROUPASSOCIATION,
      SYNTHETICS_GroupAssociation.GetTypes(),
    ],
    [
      AWS_ResourceType.TIMESTREAMWRITE_DATABASE,
      TIMESTREAMWRITE_Database.GetTypes(),
    ],
    [AWS_ResourceType.TIMESTREAMWRITE_TABLE, TIMESTREAMWRITE_Table.GetTypes()],
    [
      AWS_ResourceType.TRANSCRIBE_LANGUAGEMODEL,
      TRANSCRIBE_LanguageModel.GetTypes(),
    ],
    [
      AWS_ResourceType.TRANSCRIBE_MEDICALVOCABULARY,
      TRANSCRIBE_MedicalVocabulary.GetTypes(),
    ],
    [AWS_ResourceType.TRANSCRIBE_VOCABULARY, TRANSCRIBE_Vocabulary.GetTypes()],
    [
      AWS_ResourceType.TRANSCRIBE_VOCABULARYFILTER,
      TRANSCRIBE_VocabularyFilter.GetTypes(),
    ],
    [AWS_ResourceType.TRANSFER_ACCESS, TRANSFER_Access.GetTypes()],
    [AWS_ResourceType.TRANSFER_AGREEMENT, TRANSFER_Agreement.GetTypes()],
    [AWS_ResourceType.TRANSFER_CERTIFICATE, TRANSFER_Certificate.GetTypes()],
    [AWS_ResourceType.TRANSFER_CONNECTOR, TRANSFER_Connector.GetTypes()],
    [AWS_ResourceType.TRANSFER_PROFILE, TRANSFER_Profile.GetTypes()],
    [AWS_ResourceType.TRANSFER_SERVER, TRANSFER_Server.GetTypes()],
    [AWS_ResourceType.TRANSFER_SSHKEY, TRANSFER_SshKey.GetTypes()],
    [AWS_ResourceType.TRANSFER_TAG, TRANSFER_Tag.GetTypes()],
    [AWS_ResourceType.TRANSFER_USER, TRANSFER_User.GetTypes()],
    [AWS_ResourceType.TRANSFER_WORKFLOW, TRANSFER_Workflow.GetTypes()],
    [
      AWS_ResourceType.VERIFIEDACCESS_ENDPOINT,
      VERIFIEDACCESS_Endpoint.GetTypes(),
    ],
    [AWS_ResourceType.VERIFIEDACCESS_GROUP, VERIFIEDACCESS_Group.GetTypes()],
    [
      AWS_ResourceType.VERIFIEDACCESS_INSTANCE,
      VERIFIEDACCESS_Instance.GetTypes(),
    ],
    [
      AWS_ResourceType.VERIFIEDACCESS_INSTANCELOGGINGCONFIGURATION,
      VERIFIEDACCESS_InstanceLoggingConfiguration.GetTypes(),
    ],
    [
      AWS_ResourceType.VERIFIEDACCESS_INSTANCETRUSTPROVIDERATTACHMENT,
      VERIFIEDACCESS_InstanceTrustProviderAttachment.GetTypes(),
    ],
    [
      AWS_ResourceType.VERIFIEDACCESS_TRUSTPROVIDER,
      VERIFIEDACCESS_TrustProvider.GetTypes(),
    ],
    [
      AWS_ResourceType.VERIFIEDPERMISSIONS_POLICYSTORE,
      VERIFIEDPERMISSIONS_PolicyStore.GetTypes(),
    ],
    [
      AWS_ResourceType.VERIFIEDPERMISSIONS_POLICYTEMPLATE,
      VERIFIEDPERMISSIONS_PolicyTemplate.GetTypes(),
    ],
    [
      AWS_ResourceType.VERIFIEDPERMISSIONS_SCHEMA,
      VERIFIEDPERMISSIONS_Schema.GetTypes(),
    ],
    [
      AWS_ResourceType.VPC_SECURITYGROUPEGRESSRULE,
      VPC_SecurityGroupEgressRule.GetTypes(),
    ],
    [
      AWS_ResourceType.VPC_SECURITYGROUPINGRESSRULE,
      VPC_SecurityGroupIngressRule.GetTypes(),
    ],
    [
      AWS_ResourceType.VPCLATTICE_ACCESSLOGSUBSCRIPTION,
      VPCLATTICE_AccessLogSubscription.GetTypes(),
    ],
    [AWS_ResourceType.VPCLATTICE_AUTHPOLICY, VPCLATTICE_AuthPolicy.GetTypes()],
    [AWS_ResourceType.VPCLATTICE_LISTENER, VPCLATTICE_Listener.GetTypes()],
    [
      AWS_ResourceType.VPCLATTICE_LISTENERRULE,
      VPCLATTICE_ListenerRule.GetTypes(),
    ],
    [
      AWS_ResourceType.VPCLATTICE_RESOURCEPOLICY,
      VPCLATTICE_ResourcePolicy.GetTypes(),
    ],
    [AWS_ResourceType.VPCLATTICE_SERVICE, VPCLATTICE_Service.GetTypes()],
    [
      AWS_ResourceType.VPCLATTICE_SERVICENETWORK,
      VPCLATTICE_ServiceNetwork.GetTypes(),
    ],
    [
      AWS_ResourceType.VPCLATTICE_SERVICENETWORKSERVICEASSOCIATION,
      VPCLATTICE_ServiceNetworkServiceAssociation.GetTypes(),
    ],
    [
      AWS_ResourceType.VPCLATTICE_SERVICENETWORKVPCASSOCIATION,
      VPCLATTICE_ServiceNetworkVpcAssociation.GetTypes(),
    ],
    [
      AWS_ResourceType.VPCLATTICE_TARGETGROUP,
      VPCLATTICE_TargetGroup.GetTypes(),
    ],
    [
      AWS_ResourceType.VPCLATTICE_TARGETGROUPATTACHMENT,
      VPCLATTICE_TargetGroupAttachment.GetTypes(),
    ],
    [AWS_ResourceType.WAF_BYTEMATCHSET, WAF_ByteMatchSet.GetTypes()],
    [AWS_ResourceType.WAF_GEOMATCHSET, WAF_GeoMatchSet.GetTypes()],
    [AWS_ResourceType.WAF_IPSET, WAF_IpSet.GetTypes()],
    [AWS_ResourceType.WAF_RATEBASEDRULE, WAF_RateBasedRule.GetTypes()],
    [AWS_ResourceType.WAF_REGEXMATCHSET, WAF_RegexMatchSet.GetTypes()],
    [AWS_ResourceType.WAF_REGEXPATTERNSET, WAF_RegexPatternSet.GetTypes()],
    [AWS_ResourceType.WAF_RULE, WAF_Rule.GetTypes()],
    [AWS_ResourceType.WAF_RULEGROUP, WAF_RuleGroup.GetTypes()],
    [AWS_ResourceType.WAF_SIZECONSTRAINTSET, WAF_SizeConstraintSet.GetTypes()],
    [
      AWS_ResourceType.WAF_SQLINJECTIONMATCHSET,
      WAF_SqlInjectionMatchSet.GetTypes(),
    ],
    [AWS_ResourceType.WAF_WEBACL, WAF_WebAcl.GetTypes()],
    [AWS_ResourceType.WAF_XSSMATCHSET, WAF_XssMatchSet.GetTypes()],
    [
      AWS_ResourceType.WAFREGIONAL_BYTEMATCHSET,
      WAFREGIONAL_ByteMatchSet.GetTypes(),
    ],
    [
      AWS_ResourceType.WAFREGIONAL_GEOMATCHSET,
      WAFREGIONAL_GeoMatchSet.GetTypes(),
    ],
    [AWS_ResourceType.WAFREGIONAL_IPSET, WAFREGIONAL_IpSet.GetTypes()],
    [
      AWS_ResourceType.WAFREGIONAL_RATEBASEDRULE,
      WAFREGIONAL_RateBasedRule.GetTypes(),
    ],
    [
      AWS_ResourceType.WAFREGIONAL_REGEXMATCHSET,
      WAFREGIONAL_RegexMatchSet.GetTypes(),
    ],
    [
      AWS_ResourceType.WAFREGIONAL_REGEXPATTERNSET,
      WAFREGIONAL_RegexPatternSet.GetTypes(),
    ],
    [AWS_ResourceType.WAFREGIONAL_RULE, WAFREGIONAL_Rule.GetTypes()],
    [AWS_ResourceType.WAFREGIONAL_RULEGROUP, WAFREGIONAL_RuleGroup.GetTypes()],
    [
      AWS_ResourceType.WAFREGIONAL_SIZECONSTRAINTSET,
      WAFREGIONAL_SizeConstraintSet.GetTypes(),
    ],
    [
      AWS_ResourceType.WAFREGIONAL_SQLINJECTIONMATCHSET,
      WAFREGIONAL_SqlInjectionMatchSet.GetTypes(),
    ],
    [AWS_ResourceType.WAFREGIONAL_WEBACL, WAFREGIONAL_WebAcl.GetTypes()],
    [
      AWS_ResourceType.WAFREGIONAL_WEBACLASSOCIATION,
      WAFREGIONAL_WebAclAssociation.GetTypes(),
    ],
    [
      AWS_ResourceType.WAFREGIONAL_XSSMATCHSET,
      WAFREGIONAL_XssMatchSet.GetTypes(),
    ],
    [AWS_ResourceType.WAFV2_IPSET, WAFV2_IpSet.GetTypes()],
    [AWS_ResourceType.WAFV2_REGEXPATTERNSET, WAFV2_RegexPatternSet.GetTypes()],
    [AWS_ResourceType.WAFV2_RULEGROUP, WAFV2_RuleGroup.GetTypes()],
    [AWS_ResourceType.WAFV2_WEBACL, WAFV2_WebAcl.GetTypes()],
    [
      AWS_ResourceType.WAFV2_WEBACLASSOCIATION,
      WAFV2_WebAclAssociation.GetTypes(),
    ],
    [
      AWS_ResourceType.WAFV2_WEBACLLOGGINGCONFIGURATION,
      WAFV2_WebAclLoggingConfiguration.GetTypes(),
    ],
    [AWS_ResourceType.WORKLINK_FLEET, WORKLINK_Fleet.GetTypes()],
    [
      AWS_ResourceType.WORKLINK_WEBSITECERTIFICATEAUTHORITYASSOCIATION,
      WORKLINK_WebsiteCertificateAuthorityAssociation.GetTypes(),
    ],
    [
      AWS_ResourceType.WORKSPACES_CONNECTIONALIAS,
      WORKSPACES_ConnectionAlias.GetTypes(),
    ],
    [AWS_ResourceType.WORKSPACES_DIRECTORY, WORKSPACES_Directory.GetTypes()],
    [AWS_ResourceType.WORKSPACES_IPGROUP, WORKSPACES_IpGroup.GetTypes()],
    [AWS_ResourceType.WORKSPACES_WORKSPACE, WORKSPACES_Workspace.GetTypes()],
    [AWS_ResourceType.XRAY_ENCRYPTIONCONFIG, XRAY_EncryptionConfig.GetTypes()],
    [AWS_ResourceType.XRAY_GROUP, XRAY_Group.GetTypes()],
    [AWS_ResourceType.XRAY_SAMPLINGRULE, XRAY_SamplingRule.GetTypes()],
  ]);
}
