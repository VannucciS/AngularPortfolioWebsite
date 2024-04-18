export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'green');
    static readonly PYTHON = new Tag('Python', 'purple');
    static readonly JAVA = new Tag('Java', 'blue');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'orange');

    private constructor (private readonly key: string, public readonly color: string) {

    }

    toString() {
        return this.key;
    }
}