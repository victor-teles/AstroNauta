import config from 'virtual:astronauta/user-config';
import { logos } from 'virtual:astronauta/user-images';

/** Check user-imported logo images have resolved correctly. */
export function validateLogoImports(): void {
	if (config.logo) {
		let err: string | undefined;
		if ('src' in config.logo) {
			if (!logos.dark || !logos.light) {
				err = `Could not resolve logo import for "${config.logo.src}" (logo.src)`;
			}
		} else {
			if (!logos.dark) {
				err = `Could not resolve logo import for "${config.logo.dark}" (logo.dark)`;
			} else if (!logos.light) {
				err = `Could not resolve logo import for "${config.logo.light}" (logo.light)`;
			}
		}
		if (err) throw new Error(err);
	}
}
