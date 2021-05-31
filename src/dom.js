window.dom = {
    create(string) {
        const container = document.createElement('template')
        container.innerHTML = string
        return container.content.firstChild
    },
    style(node, name, value) {
        if (arguments.length === 2) {
            if (name instanceof Object) {
                for (let key in name) {
                    node.style[key] = name[key]
                }
            } else if (typeof name === 'string') {
                return node.style[name]
            }
        } else if (arguments.length === 3) {
            node.style[name] = value
        }
    },
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)
    },
    each(nodes, fn) {
        for (let i = 0; i < nodes.length; i++) {
            fn.call(null, nodes[i])
        }
    }
}
