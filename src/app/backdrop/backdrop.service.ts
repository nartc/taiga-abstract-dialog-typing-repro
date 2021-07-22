import {Injectable} from "@angular/core";
import {AbstractTuiDialogService} from "@taiga-ui/cdk";
import {PolymorpheusComponent} from "@tinkoff/ng-polymorpheus";
import {BackdropDirective} from "./backdrop.directive";

@Injectable({providedIn: 'root'})
export class BackdropService extends AbstractTuiDialogService<{}> {
    readonly defaultOptions = {};
    readonly component = new PolymorpheusComponent(BackdropDirective);
}
