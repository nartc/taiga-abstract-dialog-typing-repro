import {Directive, Inject} from "@angular/core";
import {TuiDialog} from "@taiga-ui/cdk";
import {POLYMORPHEUS_CONTEXT} from "@tinkoff/ng-polymorpheus";

@Directive({
    selector: 'backdrop'
})
export class BackdropDirective {
    constructor(@Inject(POLYMORPHEUS_CONTEXT) readonly context: TuiDialog<{}, boolean>) {
    }
}
