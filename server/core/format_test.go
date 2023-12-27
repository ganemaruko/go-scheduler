/*
sample
*/

package core_test

type FormattableExample struct {
	Name string
	ID   string
}

func (f *FormattableExample) SerializeToYaml() string {
	return "aaa"
}

func ExampleFormattable() {
	// Formattable is an interface for objects that can be serialized to and deserialized from YAML.
	// Serialize as YAML.
	// Deserialize from YAML.

}
