import { Transformer } from "../../../lib/transformer/Transformer";
import { UserInterface } from "../model/contract/UserInterface";

/**
 * Class UserTransformer
 */
export class UserTransformer extends Transformer {
	/**
	 * @return
	 */
	async setData(): Promise<any> {
		return await this.setFormat(this.data);
	}

	/**
	 *
	 * @param user
	 */
	async setFormat(user: UserInterface): Promise<any> {
		return {
			id: user.id,
			email: user.email,
			username: user.username,
			identity_number: user.identity_number,
			account_number: user.account_number,
		};
	}
}
