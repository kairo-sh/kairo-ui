import { Component, computed, input } from '@angular/core';
import { hlm } from '@spartan-ng/brain/core';
import type { ClassValue } from 'clsx';

@Component({
	selector: 'ku-sheet-header',
	standalone: true,
	template: `
		<ng-content />
	`,
	host: {
		'[class]': '_computedClass()',
	},
})
export class KuSheetHeaderComponent {
	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	protected _computedClass = computed(() => hlm('flex flex-col space-y-2 text-center sm:text-left', this.userClass()));
}
