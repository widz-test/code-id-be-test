import { MongooseConfig } from "./mongoose/MongooseConfig";

/**
 * Class Database
 */
export class Database {
	async handle() {
		await this.openMainDataSource();
	}

	async closed() {
		await (new MongooseConfig).disconnect();
	}

	async openMainDataSource() {
		try {
			await (new MongooseConfig).handle();
		} catch (e) {
			console.error(
				"\u274C",
				"Error during Main Data Source initialization",
				e
			);
		}
	}
}
