import { Directive, computed, input } from '@angular/core';
import { hlm } from '@spartan-ng/brain/core';
import type { ClassValue } from 'clsx';

@Directive({
	selector: 'ku-select-value,[kuSelectValue], brn-select-value[hlm]',
	standalone: true,
	host: {
		'[class]': '_computedClass()',
	},
})
export class KuSelectValueDirective {
	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	protected readonly _computedClass = computed(() =>
		hlm(
			'!inline-block ltr:text-left rtl:text-right border-border w-[calc(100%)]] min-w-0 pointer-events-none truncate',
			this.userClass(),
		),
	);
}
