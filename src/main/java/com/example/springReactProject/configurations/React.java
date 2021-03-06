package com.example.springReactProject.configurations;

import jdk.nashorn.api.scripting.NashornScriptEngine;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;

import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.io.IOException;

@Component
public class React {

    @Value(value = "classpath:static/nashorn-polyfill.js")
    private Resource nashornPolyfillFile;

    @Value(value = "classpath:static/bundle.js")
    private Resource bundleJsFile;

    public String renderEntryPoint() throws ScriptException, IOException {

        NashornScriptEngine nashornScriptEngine = getNashornScriptEngine();

        try {
            Object html = nashornScriptEngine.invokeFunction("renderServer");
            return String.valueOf(html);
        } catch (Exception e) {
            throw new IllegalStateException("Error! Failed to render react component!", e);
        }

    }

    private NashornScriptEngine getNashornScriptEngine() throws ScriptException, IOException {

        NashornScriptEngine nashornScriptEngine = (NashornScriptEngine) new ScriptEngineManager().getEngineByName ("nashorn");

        nashornScriptEngine.eval("load('"+nashornPolyfillFile.getURL()+"')");
        nashornScriptEngine.eval("load('"+bundleJsFile.getURL()+"')");

        return nashornScriptEngine;
    }
}