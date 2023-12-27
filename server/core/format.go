/*
 */

package core

// Formattable is an interface for objects that can be serialized to and deserialized from YAML.
type Formattable interface {
	// Serialize as YAML.
	SerializeToYaml() string
	// Deserialize from YAML.
	DeserializeFromYaml(string)
}
