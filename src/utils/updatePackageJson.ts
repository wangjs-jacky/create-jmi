import { writeFileSync } from "fs";
import { getProjectPath } from "./getProjectPath";

/**
 * 更新 package.json
 */
export async function updatePackageJson(ctxRef, newPackageJson) {
  const { originPackageJson } = ctxRef.current;
  const {merge} = await import('lodash-es');
 
  const mergeJson = merge(originPackageJson, newPackageJson)

  ctxRef.current = {
    ...ctxRef.current,
    originPackageJson: mergeJson,
  }
  
  writeFileSync(
    getProjectPath('package.json'),
    JSON.stringify(mergeJson, null, 2),
  );
}