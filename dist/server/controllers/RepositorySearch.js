"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const URL = `https://api.github.com/search/repositories`;
class RepositorySearch {
    constructor(language = 'all', sort = 'stars', order = 'desc', type = 'Repositories', page = 0, per_page = 9) {
        this.fetchRepositories = () => __awaiter(this, void 0, void 0, function* () {
            debugger;
            try {
                const data = yield axios_1.default.get(URL, {
                    params: {
                        q: `language:${this.language}`,
                        sort: this.sort,
                        order: this.order,
                        type: this.type,
                        page: this.page,
                        per_page: this.per_page
                    }
                });
                return data.data.items;
            }
            catch (ex) {
                console.log(ex);
            }
        });
        this.language = language;
        this.sort = sort;
        this.order = order;
        this.type = type;
        this.page = page;
        this.per_page = per_page;
    }
}
exports.default = RepositorySearch;
