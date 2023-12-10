import fse from "fs-extra";
import { PACKAGE_ROOT } from "../../constants";

/**
 * 获取当前package.json的版本号
 */
export const getOriginPackageJson = () => {
  const pkgJson = fse.readJsonSync(PACKAGE_ROOT, { throws: false });
  return pkgJson;
};

/* 
  作用：往环境变量中注入 package.json 信息
  后续中间件，可通过 context.originPackageJson 及 context.originVersion 获取
*/
export const middleware_pkgInfo = (next, ctxRef) => {
  const originPackageJson = getOriginPackageJson();

  ctxRef.current = {
    ...ctxRef.current,
    originVersion: originPackageJson?.version,
    originPackageJson: originPackageJson,
  };

  next();
}