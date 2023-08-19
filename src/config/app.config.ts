interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Developer'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Developer', 'Administrator'],
  tenantName: 'Organization',
  applicationName: 'google sheet',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
