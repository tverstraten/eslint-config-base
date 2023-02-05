module.exports = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: "tsconfig.json",
		sourceType: "module",
		ecmaVersion: 2020,
		warnOnUnsupportedTypeScriptVersion: false,
		ecmaFeatures: {
			impliedStrict: true, // Enable global strict mode
		},
	},
	plugins: [
		"@typescript-eslint/eslint-plugin",
		"@typescript-eslint", // Add some TypeScript specific rules, and disable rules covered by the typechecker
		"spellcheck",
		"import", // Add rules that help validate proper imports
	],
	extends: [
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier",
	],
	root: true,
	env: {
		node: true,
		jest: true,
	},
	rules: {
		"@typescript-eslint/interface-name-prefix": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": [
			"error",
			{ argsIgnorePattern: "^__", args: "all" },
		],
		"@typescript-eslint/no-this-alias": [
			"error",
			{ allowedNames: ["_thisThis"] },
		],
		"@typescript-eslint/no-var-requires": "warn",
		"@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
		"default-case": ["error", { commentPattern: "^skip\\sdefault" }],
		"id-length": [
			"error",
			{
				min: 3,
				exceptions: ["id", "ts", "fs", "db", "Go", "go", "fk", "pk"],
			},
		],
		"max-params": ["error", 5],
		"max-depth": ["error", 4],
		"no-param-reassign": "error",
		"no-throw-literal": "error",
		"require-await": "off",
		"@typescript-eslint/array-type": [
			"error",
			{ default: "array", readonly: "array" },
		],
		"@typescript-eslint/method-signature-style": ["error", "method"],
		"@typescript-eslint/no-confusing-non-null-assertion": "error",
		"@typescript-eslint/no-extra-non-null-assertion": "error",
		"@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
		"@typescript-eslint/prefer-enum-initializers": "error",
		"lines-between-class-members": "error", // turn off to allow ts version
		"@typescript-eslint/lines-between-class-members": ["error"],
		"no-redeclare": "off", // turn off to allow ts version
		"@typescript-eslint/no-redeclare": ["error"],
		"no-shadow": "off", // turn off to allow ts version
		"@typescript-eslint/no-shadow": ["error"],
		"no-useless-constructor": "off", // turn off to allow ts version
		"@typescript-eslint/no-useless-constructor": ["error"],
		"no-return-await": "off", // turn off to allow ts version
		"@typescript-eslint/return-await": "error",

		// not in spec.ts
		"@typescript-eslint/explicit-function-return-type": "error",
		"max-lines-per-function": ["error", 40],
		"max-lines": ["error", 1000],

		"@typescript-eslint/naming-convention": [
			"error",
			{
				selector: ["typeLike", "function"],
				format: ["StrictPascalCase"],
			},
			{
				selector: ["memberLike"],
				format: ["camelCase"],
				leadingUnderscore: "allow",
			},
			{
				selector: "parameter",
				format: ["camelCase"],
				leadingUnderscore: "allowDouble",
			},
			{
				selector: ["variable"],
				format: ["UPPER_CASE"],
				modifiers: ["exported", "global"],
			},
			{
				selector: ["variable"],
				format: ["camelCase"],
				modifiers: ["static", "const", "destructured"],
			},
		],
		"spellcheck/spell-checker": [
			1,
			{
				comments: true,
				strings: true,
				identifiers: true,
				templates: true,
				lang: "en_CA",
				skipWords: [
					"aml",
					"ansi",
					"antlr4",
					"ast",
					"aws",
					"bcc",
					"bccd",
					"bitbucket",
					"bool",
					"bll2",
					"Cardinality",
					"ccd",
					"charset",
					"codecommit",
					"comparator",
					"contructable",
					"cors",
					"csv",
					"ctor",
					"designator",
					"dotenv",
					"dal",
					"ejs",
					"enum",
					"equifax",
					"facebook",
					"fixup",
					"gists",
					"gitlab",
					"gmail",
					"guid",
					"golang",
					"hotmail",
					"ide",
					"implementor",
					"indicies",
					"javascript",
					"jsdoc",
					"kyc",
					"kotlin",
					"lhs",
					"loggable",
					"mariadb",
					"mappable",
					"microsoft",
					"mutator",
					"mutators",
					"mutex",
					"mysql",
					"nullable",
					"oauth",
					"odata",
					"orm",
					"openid",
					"opinionated",
					"openapi",
					"optionality",
					"paren",
					"parens",
					"parsable",
					"php",
					"pino",
					"poco",
					"postgres",
					"rdbms",
					"recordset",
					"recordsets",
					"regex",
					"regexes",
					"repackager",
					"replacer",
					"repo",
					"req",
					"resolvers",
					"rhs",
					"runnable",
					"sanitizer",
					"schema",
					"ses",
					"sql92",
					"Sql",
					"stitcher",
					"stringified",
					"stringifying",
					"sysref",
					"transpile",
					"tsql",
					"ttl",
					"uid",
					"uids",
					"unlink",
					"updateable",
					"uri",
					"urlencoded",
					"utf8",
					"utf-8",
					"utm",
					"utils",
					"uuidv4",
					"vb",
					"vbnet",
					"vnd",
				],
				skipIfMatch: ["http://[^s]*", "^[-\\w]+/[-\\w\\.]+$"],
				skipWordIfMatch: ["^foobar.*$"],
				minLength: 3,
			},
		],
	},
};
