/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { NodeCachedDataCleaner } from 'vs/code/electron-browser/sharedProcess/contrib/nodeCachedDataCleaner';
import { LanguagePackCachedDataCleaner } from 'vs/code/electron-browser/sharedProcess/contrib/languagePackCachedDataCleaner';
import { IInstantiationService } from 'vs/platform/instantiation/common/instantiation';
import { IDisposable, combinedDisposable } from 'vs/base/common/lifecycle';
import { StorageDataCleaner } from 'vs/code/electron-browser/sharedProcess/contrib/storageDataCleaner';
import { LogsDataCleaner } from 'vs/code/electron-browser/sharedProcess/contrib/logsDataCleaner';

export function createSharedProcessContributions(service: IInstantiationService): IDisposable {
	return combinedDisposable([
		service.createInstance(NodeCachedDataCleaner),
		service.createInstance(LanguagePackCachedDataCleaner),
		service.createInstance(StorageDataCleaner),
		service.createInstance(LogsDataCleaner)
	]);
}
