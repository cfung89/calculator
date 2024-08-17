#! /bin/python3
from stack import stack


def calculator():
    operators = "+-*/^"
    result = stack()
    print(result)
    while True:
        user_input = input("Input calculation: ").split()
        if user_input[0] != "?":
            continue
        if user_input[1] == "q":
            break
        for ui in range(1, len(user_input)):
            try:
                user_input[ui] = float(user_input[ui])
            except:
                b = result.pop()
                a = result.pop()
                if user_input[ui] == "+":
                    result.push(a + b)
                elif user_input[ui] == "-":
                    result.push(a - b)
                elif user_input[ui] == "*":
                    result.push(a * b)
                elif user_input[ui] == "/":
                    result.push(a / b)
                else:
                    result.push(a**b)
            else:
                result.push(user_input[ui])
        if result[-1].is_integer():
            result[-1] = int(result[-1])
        print(result)
    print("Finished.")


calculator()
