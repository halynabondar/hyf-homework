//Voice assistant

let userName = null;
const todoList = [];

function getReply(command){
    const cleanCommand = command.toLowerCase().trim();

    if (cleanCommand.startsWith('hello my name is')) {
        let name = command.substring(16).trim();

        if (userName && userName.toLowerCase() === name.toLowerCase()) {
            return `You've already introduced yourself as ${userName}.`
        }
        userName = name;
        return `Nice to meet you, ${userName}.`;
    }

    else if (cleanCommand === "what is my name") {
        if (userName) {
            return `Your name is ${userName}.`;
        } else {
            return "You haven't told me your name yet.";
        }
    }

    else if (cleanCommand.startsWith("add") && cleanCommand.endsWith("to my todo")) {
        let todoItem = command.substring(4, command.length - 11).trim();
        todoList.push(todoItem);
        return `${todoItem} added to your todo list.`;
    }

    else if (cleanCommand.startsWith("remove") && cleanCommand.endsWith("from my todo")) {
        let todoItem = command.substring(7, command.length - 13).trim();
        let itemIndex = todoList.findIndex(item => item.toLowerCase() === todoItem.toLowerCase());
        if (itemIndex > -1) {
            todoList.splice(itemIndex, 1);
            return `Removed ${todoItem} from your to-do list.`;
        } else {
            return `${todoItem} is not in your to-do list.`;
        }
    }

    else if (cleanCommand === "what is on my todo?") {
        if (todoList.length > 0) {
            return `You have ${todoList.length} todo${todoList.length > 1 ? 's' : ''}: ${todoList.join(", ")}`;
        } else {
            return "Your todo list is empty.";
        }
    }

    else if (cleanCommand === "what day is it today?") {
        const today = new Date();
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return today.toLocaleDateString(undefined, options);
    }

    else if (cleanCommand.startsWith("what is")) {
        const expression = command.split("What is ")[1].replace('?', '').trim();
        try {
            const result = eval(expression);
            return result.toString();
        } catch (error) {
            return "I couldn't calculate that.";
        }
    }

    else if (cleanCommand.startsWith("set a timer for")) {
        const minutes = parseInt(command.split("Set a timer for ")[1].split(" minutes")[0], 10);
        if (!isNaN(minutes) && minutes > 0) {
            setTimeout(() => {
                console.log("Timer done");
            }, minutes * 60000);
            return `Timer set for ${minutes} minutes`;
        } else {
            return 'Cannot set timer'
        }
    }

    else if (cleanCommand === "what's the weather like today?") {
        return "The weather is sunny with a high of 22°C.";
    }

    return "I don't understand that command.";
}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("What is 3 + 3?"));
console.log(getReply("Set a timer for 4 minutes"));
console.log(getReply("What's the weather like today?"));