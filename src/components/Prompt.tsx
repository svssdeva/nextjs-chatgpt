import {Component, useState} from "react";

export default class Prompt extends Component<{ onSubmit: any }> {
    render() {
        let {onSubmit} = this.props;
        const [promptInput, setPromptInput] = useState("");
        return (
            <textarea onChange={(e) => setPromptInput(e.target.value)}
                      onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                              e.preventDefault();
                              onSubmit(promptInput);
                              setPromptInput("");
                          }
                      }}
                      value={promptInput}
                      rows={4}
                      placeholder="Enter your prompt here"
                      className="w-full p-2.5 text-sm text-gray-200 bg-slate-200 rounded-lg border border-gray-300"/>
        )
    }
}