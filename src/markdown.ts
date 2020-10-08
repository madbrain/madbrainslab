
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';

export function load(name: string) {
    return ajax({ url: `content/${name}.md`, responseType: 'text' })
        .pipe(map(resp => resp.response))
        .pipe(map(content => {
            marked.setOptions({
                gfm: true,
                highlight: (code, lang) => {
                    if (lang) {
                        const result = hljs.highlight(lang, code);
                        return result.value;
                    }
                    return code;
                }
            });
            return marked(content);
        }));
}