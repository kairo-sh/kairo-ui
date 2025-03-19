import { Directive } from '@angular/core';

@Directive({
	// eslint-disable-next-line @angular-eslint/directive-selector
	selector: 'ku-hint',
	standalone: true,
	host: {
		class: 'block text-sm text-muted-foreground',
	},
})
export class KuHintDirective {}
