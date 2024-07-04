from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route("/save_product_info", methods=["POST"])
def save_product_info():
    data = request.json
    # Bu yerda ma'lumotlarni saqlash jarayonini amalga oshirish
    print(data)
    return jsonify({"status": "success"})


if __name__ == "__main__":
    app.run(debug=True)
